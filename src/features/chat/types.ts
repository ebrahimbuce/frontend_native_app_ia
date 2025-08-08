export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  createdAt: string;
  status?: 'pending' | 'sent' | 'failed';
}

export interface ChatState {
  messages: ChatMessage[];
  typing: boolean;
}
