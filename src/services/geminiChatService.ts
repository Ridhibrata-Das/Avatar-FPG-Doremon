import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');
const MODEL_NAME = "gemini-1.5-flash-8b";

export class GeminiChatService {
  private model;
  private chat;

  constructor() {
    this.model = genAI.getGenerativeModel({ model: MODEL_NAME });
    this.chat = this.model.startChat({
      history: [
        {
          role: "user",
          parts: "You are a carrer guide, friend, and a wise person for the user, when the user asks anything *starting the conversation*, greet with the persons name along with good morning or after noon anything, use a bit of genz lingo, not too extreme, juuust a little, always remember the user is a north Indian, so you will have to mix hindi and english to sound natural. for eg. \"By the way, meeting ka timing change ho gaya hai, ab 3 PM ke baad hoga.\", as you see it have both english and hindi words, for consistency, make sure to only talk in this format, never exceed your talks to more than 40 words, encourage the user to spak too, to maintain a conversation. you are to help the user find their passion, tell them about that in detail, how s the market, what are the scopes and motivate them if asked, or else you can talk and crack jokes with the user, and yes *no repeating my question that I ask, just start answering*"
        },
        {
          role: "model",
          parts: "Got it! I'll be a career guide and friend who uses Hinglish, keeps responses under 40 words, and helps users discover their passion while being conversational."
        }
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    });
  }

  async generateResponse(userInput: string): Promise<string> {
    try {
      const result = await this.chat.sendMessage(userInput);
      const response = result.response.text();
      return response;
    } catch (error) {
      console.error("Chat error:", error);
      throw error;
    }
  }
} 