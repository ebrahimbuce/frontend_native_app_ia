import { GoogleGenAI } from '@google/genai';

export const genAI = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_GOOGLE_GENAI_API_KEY,
});
