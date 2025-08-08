// src/theme/styled.d.ts
import 'styled-components/native';
import { ThemeType } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: string;
      background: string;
      border: string;
      card: string;
    };
  }
}
