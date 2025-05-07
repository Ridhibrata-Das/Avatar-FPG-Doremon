class AudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.bufferSize = 4096;
    this.buffer = new Float32Array(this.bufferSize);
    this.bufferIndex = 0;
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    if (!input || !input[0]) return true;

    const inputChannel = input[0];
    let sum = 0;

    // Fill buffer and calculate average level
    for (let i = 0; i < inputChannel.length; i++) {
      this.buffer[this.bufferIndex] = inputChannel[i];
      sum += Math.abs(inputChannel[i]);
      this.bufferIndex++;

      // When buffer is full, send it
      if (this.bufferIndex >= this.bufferSize) {
        const pcmData = new Int16Array(this.bufferSize);
        for (let j = 0; j < this.bufferSize; j++) {
          pcmData[j] = Math.max(-32768, Math.min(32767, Math.floor(this.buffer[j] * 32768)));
        }

        const level = Math.min((sum / this.bufferSize) * 400, 100);
        this.port.postMessage({ pcmData: pcmData.buffer, level });

        // Reset buffer
        this.bufferIndex = 0;
        sum = 0;
      }
    }

    return true;
  }
}

registerProcessor('audio-processor', AudioProcessor); 