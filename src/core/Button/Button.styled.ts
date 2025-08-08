// src/components/ui/ThemedButton.styled.ts

import styled from 'styled-components/native';

interface IconContainerProps {
  $transparent?: boolean;
}

// Botón principal
export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }: any) => theme.colors.buttonBackground || theme.colors.primary};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

// Texto del botón
export const ButtonText = styled.Text`
  color: ${({ theme }: any) => theme.colors.buttonText || '#ffffff'};
  font-size: 16px;
  font-weight: 600;
`;

export const IconContainer = styled.TouchableOpacity<IconContainerProps>`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ $transparent, theme }: any) =>
    $transparent ? 'transparent' : theme.colors.neutralBackground};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
