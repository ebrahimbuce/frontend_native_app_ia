import styled, { DefaultTheme } from 'styled-components/native';

export const ScreenWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background};
`;
