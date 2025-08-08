import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Wrapper, StyledInput } from './InputBase.styled';

export default function InputBase({ placeholder = 'Escribe tu mensaje...', ...rest }: TextInputProps) {
  const theme = useTheme();

  return (
    <Wrapper key={theme.colors.text}>
      <StyledInput placeholder={placeholder} placeholderTextColor={theme.colors.text + '99'} {...rest} />
    </Wrapper>
  );
}
