import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScreenWrapper } from '~/src/core/ScreenWrapper/ScreenWraper';
import MessageContent from './components/MessageContent/MessageContent';
import InputChat from './components/InputChat/InputChat';

export default function ChatScreen() {
  const [typingMessage, setTypingMessage] = useState<string | null>(null);

  return (
    <ScreenWrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={80}
        >
          <MessageContent typingMessage={typingMessage} />
          <InputChat onTyping={setTypingMessage} />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScreenWrapper>
  );
}
