import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { IconProps } from './type';

export default function MicIcon({ size }: IconProps) {
  const theme = useTheme();

  return <FontAwesome name='microphone' size={size || 24} color={theme.colors.text} />;
}
