export function pcmToWav(pcmData: Int16Array, sampleRate: number = 16000): Uint8Array {
  const wavHeader = createWavHeader(pcmData.length * 2, sampleRate);
  const wavData = new Uint8Array(wavHeader.length + pcmData.length * 2);
  
  // Copy header
  wavData.set(wavHeader);
  
  // Copy PCM data
  const view = new DataView(wavData.buffer, wavHeader.length);
  for (let i = 0; i < pcmData.length; i++) {
    view.setInt16(i * 2, pcmData[i], true);
  }
  
  return wavData;
}

function createWavHeader(dataLength: number, sampleRate: number): Uint8Array {
  const header = new ArrayBuffer(44);
  const view = new DataView(header);
  
  // RIFF chunk descriptor
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataLength, true);
  writeString(view, 8, 'WAVE');
  
  // fmt sub-chunk
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // fmt chunk size
  view.setUint16(20, 1, true); // audio format (PCM)
  view.setUint16(22, 1, true); // num channels (mono)
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true); // byte rate
  view.setUint16(32, 2, true); // block align
  view.setUint16(34, 16, true); // bits per sample
  
  // data sub-chunk
  writeString(view, 36, 'data');
  view.setUint32(40, dataLength, true);
  
  return new Uint8Array(header);
}

function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
} 