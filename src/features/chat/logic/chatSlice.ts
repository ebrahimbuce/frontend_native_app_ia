import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessage, ChatState } from '../types';

const initialState: ChatState = {
  messages: [],
  typing: false,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    setMessages: (state, action: PayloadAction<ChatMessage[]>) => {
      state.messages = action.payload;
    },
    setTyping: (state, action: PayloadAction<boolean>) => {
      state.typing = action.payload;
    },
    updateMessageStatus: (state, action: PayloadAction<{ id: string; status: 'pending' | 'sent' | 'failed' }>) => {
      const msg = state.messages.find((m) => m.id === action.payload.id);
      if (msg) {
        msg.status = action.payload.status;
      }
    },
    clearChat: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, setMessages, setTyping, updateMessageStatus, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
