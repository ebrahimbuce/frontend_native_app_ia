import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonText } from './Button.styled';

interface Props extends TouchableOpacityProps {
  label: string;
}

export default function Button({ label, ...rest }: Props) {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
}
