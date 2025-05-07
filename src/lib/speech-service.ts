import { TTS } from '@coqui-ai/tts';
import * as whisper from '@openai/whisper';

export class SpeechService {
  private tts: TTS | null = null;
  private whisperModel: any = null;
  private isListening: boolean = false;
  private audioContext: AudioContext | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private defaultVoice: string = "Emma"; // Using Emma as the default female voice

  constructor() {
    if (typeof window !== 'undefined') {
      this.initTTS();
      this.initWhisper();
    }
  }

  private async initTTS() {
    try {
      // Initialize Coqui TTS with XTTS v2 model and configure for female voice
      this.tts = new TTS("tts_models/multilingual/multi-dataset/xtts_v2", {
        progress_bar: false,
        voice: this.defaultVoice
      });
      await this.tts.ready();
    } catch (error) {
      console.error('Failed to initialize Coqui TTS:', error);
    }
  }

  private async initWhisper() {
    try {
      // Load Whisper model
      this.whisperModel = await whisper.load('base');
    } catch (error) {
      console.error('Failed to initialize Whisper:', error);
    }
  }

  async startListening(onResult: (text: string) => void, onError?: (error: any) => void) {
    if (this.isListening) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioContext = new AudioContext();
      this.mediaRecorder = new MediaRecorder(stream);
      this.audioChunks = [];
      this.isListening = true;

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
        try {
          // Transcribe audio using Whisper
          const result = await this.whisperModel.transcribe(audioBlob);
          onResult(result.text);
        } catch (error) {
          console.error('Whisper transcription error:', error);
          if (onError) onError(error);
        }
      };

      this.mediaRecorder.start(1000); // Collect data in 1-second chunks
    } catch (error) {
      console.error('Error starting audio recording:', error);
      if (onError) onError(error);
    }
  }

  stopListening() {
    if (!this.isListening || !this.mediaRecorder) return;

    this.isListening = false;
    this.mediaRecorder.stop();
    this.audioContext?.close();
    this.audioContext = null;
  }

  async speak(text: string, options: { language?: string, voice?: string } = {}): Promise<void> {
    if (!this.tts) {
      throw new Error('TTS not initialized');
    }

    try {
      // Use the specified voice or default to Emma
      const audioData = await this.tts.tts(
        text,
        options.voice || this.defaultVoice,
        options.language || 'en' 
      );

      // Convert the audio data to an AudioBuffer and play it
      const audioContext = new AudioContext();
      const audioBuffer = await audioContext.decodeAudioData(audioData.buffer);
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      
      return new Promise((resolve, reject) => {
        source.onended = () => {
          audioContext.close();
          resolve();
        };
        source.addEventListener('error', (err) => reject(err));
        source.start();
      });
    } catch (error) {
      console.error('TTS error:', error);
      throw error;
    }
  }

  // Method to change voice
  async setVoice(voice: string) {
    this.defaultVoice = voice;
    if (this.tts) {
      await this.initTTS(); // Reinitialize with new voice
    }
  }

  // Method to change TTS model
  async setTTSModel(modelName: string) {
    try {
      this.tts = new TTS(modelName);
      await this.tts.ready();
    } catch (error) {
      console.error('Failed to load TTS model:', error);
      throw error;
    }
  }

  // Method to change Whisper model
  async setWhisperModel(modelName: 'tiny' | 'base' | 'small' | 'medium' | 'large') {
    try {
      this.whisperModel = await whisper.load(modelName);
    } catch (error) {
      console.error('Failed to load Whisper model:', error);
      throw error;
    }
  }
}

// Create a singleton instance
export const speechService = new SpeechService(); 