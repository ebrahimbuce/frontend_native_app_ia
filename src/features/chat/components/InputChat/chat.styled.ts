import styled from 'styled-components/native';

export const Content = styled.View`
  padding-top: 10px;
  flex: 1;
`;

export const InputWrapper = styled.View`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }: any) => theme.colors.card};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const InputArea = styled.View`
  padding-bottom: 12px;
  margin-bottom: 12px;
  margin-top: 5px;
`;

export const ButtonsRow = styled.View`
  padding-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RowLeft = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const RowRight = styled.View`
  flex-direction: row;
  gap: 8px;
`;
