import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }: any) => theme.colors.text};
  max-height: 200px;
`;
