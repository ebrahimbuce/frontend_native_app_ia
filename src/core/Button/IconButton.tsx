import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { IconContainer } from './Button.styled';

interface Props extends TouchableOpacityProps {
  icon: React.ReactNode;
  transparent?: boolean;
}

export default function IconButton({ icon, transparent = false, ...rest }: Props) {
  return (
    <IconContainer $transparent={transparent} {...rest}>
      {icon}
    </IconContainer>
  );
}
