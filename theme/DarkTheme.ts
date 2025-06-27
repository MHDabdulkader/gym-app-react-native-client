import { MD3DarkTheme as DefaultTheme, MD3Theme } from 'react-native-paper';
//import { CustomTypograpy } from './Font';

export const DarkTheme: MD3Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E2F163',         // Highlight
    secondary: '#B3A0FF',       // Background accents / Chips
    tertiary: '#896CFE',        // Main buttons / Play / Tabs
    background: '#232323',      // Screen background
    surface: '#232323',         // Card surfaces (same as background)
    onPrimary: '#232323',       // Text/icon on primary (lime)    #232323
    onSecondary: '#232323',     // Text/icon on secondary
    onTertiary: '#FFFFFF',      // Text/icon on tertiary (purple) #FFFFFF
    onBackground: '#FFFFFF',    // Text on background
    onSurface: '#FFFFFF',       // Text on surfaces
    outline: '#B3A0FF',         // Border/icon strokes (light purple)
    outlineVariant: '#896CFE',  // Alternative border (dark purple)
    inversePrimary: '#896CFE',  // Used for floating action buttons, etc.
    elevation: {
      level0: '#232323',
      level1: '#2A2A2A',
      level2: '#333333',
      level3: '#3D3D3D',
      level4: '#464646',
      level5: '#505050',
    },
  },
};
