import { MD3LightTheme as DefaultTheme, MD3Theme } from 'react-native-paper';
//import { CustomTypograpy } from './Font';

export const LightTheme: MD3Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#896CFE',         // Purple as main action  #896CFE
    secondary: '#B3A0FF',       // Background accent / chip  #B3A0FF
    tertiary: '#E2F163',        // Lime highlight   #E2F163
    background: '#FFFFFF',      // Light background   #FFFFFF
    surface: '#FFFFFF',
    onPrimary: '#FFFFFF',       // Text/icon on primary
    onSecondary: '#232323',     // Text/icon on secondary  #232323
    onTertiary: '#232323',      // Text/icon on lime
    onBackground: '#232323',
    onSurface: '#232323',
    outline: '#B3A0FF',
    outlineVariant: '#896CFE',
    inversePrimary: '#E2F163',
    elevation: {
      level0: '#FFFFFF',
      level1: '#F5F5F5',
      level2: '#EEEEEE',
      level3: '#E0E0E0',
      level4: '#D6D6D6',
      level5: '#CCCCCC',
    },
  },
};

