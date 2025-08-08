import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from 'react-native';
import ChatScreen from '../features/chat';
import { CustomDrawerContent } from './CustomDrawer';
import IconButton from '../core/Button/IconButton';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  const scheme = useColorScheme();
  const theme = useTheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <IconButton
              style={{ marginLeft: 5 }}
              transparent
              icon={<Feather name='menu' color={theme.colors.text} size={24} />}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          drawerStyle: {
            width: 260,
          },
          headerStyle: {
            backgroundColor: scheme === 'dark' ? '#000' : '#fff', // Negro o blanco
            elevation: 0, // Android (quita sombra)
            shadowOpacity: 0, // iOS (quita sombra)
            borderBottomWidth: 0, // Web (fallback)
          },
          headerTitleStyle: {
            color: scheme === 'dark' ? '#fff' : '#000', // Texto blanco o negro
          },
        })}
      >
        <Drawer.Screen name='Chat' component={ChatScreen} options={{ title: 'Chat' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
