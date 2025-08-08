import { createAsyncThunk } from '@reduxjs/toolkit';
import { setTyping } from '../chatSlice';
import { genAI } from '~/src/lib/ia';

export const fetchAIResponse = createAsyncThunk<
  string, // Return type (AI response text)
  { userText: string }, // Argument type
  { rejectValue: string } // Rejection type
>('chat/fetchAIResponse', async ({ userText }, { dispatch, rejectWithValue }) => {
  try {
    dispatch(setTyping(true));

    const chat = await genAI.chats.create({
      model: 'gemini-2.5-flash',
    });

    const response = await chat.sendMessage({
      message: userText,
    });

    return response.text ?? 'No response';
  } catch (error) {
    console.error('Error fetching AI response:', error);
    return rejectWithValue('Error generating AI response');
  } finally {
    dispatch(setTyping(false));
  }
});
