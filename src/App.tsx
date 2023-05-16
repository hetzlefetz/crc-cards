import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { MainPanel } from 'components/mainPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from 'components/header/header';
import { useMediaQuery } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App: React.FC = () => {
  const colorMode = React.useContext(ColorModeContext);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <MainPanel />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
