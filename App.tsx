import './src/polyfills/structuredClone';
import React from 'react';
import AppNavigator from './src/navigation/Navigation';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from './src/theme/themes';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
}
