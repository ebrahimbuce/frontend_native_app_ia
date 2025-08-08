import React, { useState } from 'react';

// Importing necessary hooks
import { useChat } from '~/src/features/chat/logic/hook/useChat';

// Importing icons and components
import IconButton from '~/src/core/Button/IconButton';
import PlusIcon from '~/src/core/Icon/PlusIcon';
import InputBase from '~/src/core/Input/InputBase';
import MicIcon from '~/src/core/Icon/MicIcon';
import SendIcon from '~/src/core/Icon/SendIcon';
import { ButtonsRow, InputArea, InputWrapper, RowLeft, RowRight } from './chat.styled';

export default function InputChat({ onTyping }: { onTyping: (text: string | null) => void }) {
  const { sendMessage } = useChat();
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;

    sendMessage(inputText.trim(), (text, isFinal) => {
      onTyping(isFinal ? null : text);
    });

    setInputText('');
  };

  return (
    <InputWrapper>
      <InputArea>
        <InputBase
          placeholder='Type a message...'
          multiline
          returnKeyType='send'
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
        />
      </InputArea>
      <ButtonsRow>
        <RowLeft>
          <IconButton icon={<PlusIcon />} />
        </RowLeft>
        <RowRight>
          <IconButton icon={<MicIcon />} />
          <IconButton icon={<SendIcon />} onPress={handleSend} />
        </RowRight>
      </ButtonsRow>
    </InputWrapper>
  );
}
