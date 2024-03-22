// theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#f9fafb',
      100: '#f4f6f8',
      // adicione mais variações de cores conforme necessário
      900: '#1a202c',
    },
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
    // adicione mais fontes conforme necessário
  },
});

export default theme;
