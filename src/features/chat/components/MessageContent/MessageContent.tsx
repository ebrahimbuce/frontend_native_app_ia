import React, { useRef, useState } from 'react';
import { Text } from 'react-native';
import { useAppSelector } from '~/src/store/hooks';
import { useTheme } from 'styled-components';
import { FlatList } from 'react-native-gesture-handler';
import MessageBubble from '../MessageBubble/MessageBubble';

export default function MessageContent({ typingMessage }: { typingMessage: string | null }) {
  const messages = useAppSelector((state) => state.chat.messages);
  const theme = useTheme();
  const flatListRef = useRef<FlatList>(null);

  const sortedMessages = [...messages].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  return (
    <FlatList
      ref={flatListRef}
      data={sortedMessages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) =>
        item.sender === 'user' ? (
          <MessageBubble text={item.text} />
        ) : (
          <Text
            style={{
              marginVertical: 15,
              marginHorizontal: 10,
              fontSize: 17,
              color: theme.colors.text,
              alignSelf: 'flex-start',
            }}
          >
            {item.text}
          </Text>
        )
      }
      ListFooterComponent={
        typingMessage ? (
          <Text
            style={{
              marginVertical: 15,
              marginHorizontal: 10,
              fontSize: 17,
              color: theme.colors.text,
              alignSelf: 'flex-start',
            }}
          >
            {typingMessage}
          </Text>
        ) : null
      }
      contentContainerStyle={{ flexGrow: 1, paddingVertical: 10 }}
      keyboardShouldPersistTaps='handled'
      onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
    />
  );
}
