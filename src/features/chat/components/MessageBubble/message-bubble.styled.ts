import styled from 'styled-components/native';

export const BubbleContainer = styled.View`
  align-self: flex-end;
  background-color: ${({ theme }: any) => theme.colors.neutralBackground};
  padding: 10px 14px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-right: 10px;
  border-radius: 20px;
  max-width: 80%;
`;

export const BubbleText = styled.Text`
  color: ${({ theme }: any) => theme.colors.text};
  font-size: 17px;
  line-height: 23px;
`;
