import React, { useEffect } from 'react';
import { BubbleContainer, BubbleText } from './message-bubble.styled';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function MessageBubble({ text }: { text: string }) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(10);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 300 });
    translateY.value = withTiming(0, { duration: 300 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <BubbleContainer>
        <BubbleText>{text}</BubbleText>
      </BubbleContainer>
    </Animated.View>
  );
}
