import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

export default function PlusIcon() {
  const theme = useTheme();

  return <AntDesign name='plus' size={24} color={theme.colors.text} />;
}
