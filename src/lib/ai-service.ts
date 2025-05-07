import { AutoTokenizer, AutoModelForCausalLM, PreTrainedModel } from '@xenova/transformers';

class AIService {
  private model: PreTrainedModel | null = null;
  private tokenizer: any | null = null;
  private systemPrompt: string = `
    // TODO: Fill in system prompt here
  `;

  private async loadModel() {
    if (!this.model || !this.tokenizer) {
      this.tokenizer = await AutoTokenizer.from_pretrained('local/LLM');
      this.model = await AutoModelForCausalLM.from_pretrained('local/LLM');
    }
  }

  private formatPrompt(userInput: string): string {
    return `${this.systemPrompt}
    
User: ${userInput}
Assistant:`;
  }

  async generateResponse(userInput: string): Promise<string> {
    try {
      await this.loadModel();
      
      if (!this.model || !this.tokenizer) {
        throw new Error('Model not loaded');
      }

      const prompt = this.formatPrompt(userInput);
      const inputs = await this.tokenizer(prompt, { return_tensors: 'pt' });
      
      const outputs = await this.model.generate(inputs.input_ids, {
        max_new_tokens: 500,
        temperature: 0.7,
        top_p: 0.95,
        do_sample: true,
        pad_token_id: this.tokenizer.pad_token_id,
      });

      const response = await this.tokenizer.decode(outputs[0], {
        skip_special_tokens: true,
      });

      // Extract only the assistant's response
      const assistantResponse = response.split('Assistant:').pop()?.trim() || '';
      return assistantResponse;

    } catch (error) {
      console.error('Error generating AI response:', error);
      throw error;
    }
  }
}

// Create a singleton instance
export const aiService = new AIService(); 