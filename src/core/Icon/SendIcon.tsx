import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme } from 'styled-components/native';
import { IconProps } from './type';

export default function SendIcon({ size }: IconProps) {
  const theme = useTheme();

  return <AntDesign name='arrowup' size={size || 20} color={theme.colors.text} />;
}
