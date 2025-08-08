import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import styled, { useTheme } from 'styled-components/native';
import { Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DefaultTheme } from 'styled-components/dist/types';
import { Feather } from '@expo/vector-icons';

const routes = [{ name: 'Chat', label: 'Chat', icon: 'home' }];

export const CustomDrawerContent = ({ navigation, state }: DrawerContentComponentProps) => {
  const theme = useTheme();

  return (
    <DrawerContainer>
      <DrawerHeader>
        <HeaderTitle>Mi App</HeaderTitle>
      </DrawerHeader>

      <DrawerItemContainer>
        <DrawerItemButton>
          <MaterialIcons name='edit-document' size={24} color={theme.colors.primary} style={{ marginRight: 12 }} />
          <DrawerItemText $focused={state.index === 0}>New Chat</DrawerItemText>
        </DrawerItemButton>
      </DrawerItemContainer>

      {routes.map((route, index) => {
        const focused = state.index === index;

        return (
          <DrawerItemContainer key={route.name}>
            <DrawerItemButton onPress={() => navigation.navigate(route.name)} $focused={focused}>
              <Feather
                name={route.icon as any}
                size={20}
                color={focused ? theme.colors.primary : theme.colors.text}
                style={{ marginRight: 12 }}
              />
              <DrawerItemText $focused={focused}>{route.label}</DrawerItemText>
            </DrawerItemButton>
          </DrawerItemContainer>
        );
      })}
    </DrawerContainer>
  );
};

const DrawerContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.colors.background};
  padding-top: 48px;
`;

const DrawerHeader = styled.View`
  padding: 40px 20px 20px;
  border-color: ${({ theme }: any) => theme.colors.border};
`;

const HeaderTitle = styled.Text`
  color: ${({ theme }: any) => theme.colors.text};
  font-size: 22px;
  font-weight: bold;
`;

const DrawerItemContainer = styled.View`
  margin: 4px 0;
`;

const DrawerItemButton = styled(Pressable)<{ $focused?: boolean; theme: DefaultTheme }>`
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: ${({ $focused, theme }: { $focused?: boolean; theme: any }) =>
    $focused ? theme.colors.card : 'transparent'};
`;

const DrawerItemText = styled.Text<{ $focused?: boolean; theme: any }>`
  color: ${({ $focused, theme }: { $focused?: boolean; theme: any }) =>
    $focused ? theme.colors.primary : theme.colors.text};
  font-size: 16px;
`;
