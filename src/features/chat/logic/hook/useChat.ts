import { useAppDispatch, useAppSelector } from '~/src/store/hooks';
import { addMessage, setTyping } from '~/src/features/chat/logic/chatSlice';
import { fetchAIResponse } from '../services/chat-service';

export function useChat() {
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.chat.messages);
  const typing = useAppSelector((state) => state.chat.typing);

  const sendMessage = async (text: string, onAIResponseTyping: (text: string, isFinal?: boolean) => void) => {
    const userMessage = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      sender: 'user' as 'user',
      createdAt: new Date().toISOString(),
      status: 'pending' as 'pending',
    };

    dispatch(addMessage(userMessage));
    dispatch(setTyping(true));

    try {
      const aiResponse = await dispatch(fetchAIResponse({ userText: text })).unwrap();

      // Typing effect
      let currentIndex = 0;
      const interval = setInterval(() => {
        currentIndex++;
        onAIResponseTyping(aiResponse.slice(0, currentIndex));

        if (currentIndex >= aiResponse.length) {
          clearInterval(interval);
          dispatch(
            addMessage({
              id: Math.random().toString(36).substr(2, 9),
              text: aiResponse,
              sender: 'ai' as 'ai',
              createdAt: new Date().toISOString(),
              status: 'sent' as 'sent',
            })
          );
          dispatch(setTyping(false));
          onAIResponseTyping('', true);
        }
      }, 30);
    } catch (error) {
      console.error('Error during AI response:', error);
      dispatch(setTyping(false));
    }
  };

  return {
    messages,
    typing,
    sendMessage,
    setTyping: (value: boolean) => dispatch(setTyping(value)),
  };
}
