import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import WeatherApp from './WeatherApp';

const App = () => {

  const [mode, setMode] = useState('light');

  useEffect(() => {
  
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');


    setMode(darkModeQuery.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setMode(e.matches ? 'dark' : 'light');
    };

    darkModeQuery.addEventListener('change', handleChange);

      darkModeQuery.removeEventListener('change', handleChange);
 
    
  }, []);

  const theme = createTheme({
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
            background: {
              default: '#f5f5f5',
              paper: '#ffffff',
            },
            text: {
              primary: '#000000',
              secondary: '#757575',
            },
          }
        : {
            background: {
              default: '#121212',
              paper: '#1E1E1E',
            },
            text: {
              primary: '#ffffff',
              secondary: '#b0bec5',
            },
          }),
    },
  });

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px',marginRight:"5%" }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </div>
      <WeatherApp></WeatherApp>
    </ThemeProvider>
  );
};

export default App;
