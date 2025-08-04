// src/App.tsx
import React, { useState, useEffect } from 'react';
import { CssBaseline, ThemeProvider, Box, Typography } from '@mui/material';
import CatalogPage from './pages/CatalogPage';
import theme from './theme/theme';
import './App.css';
import MainHeader from './components/MainHeader';
import TopBar from './components/TopBar';

function App() {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar visible={stickyVisible} />
      <Box className="page-background" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <MainHeader />
        <Box component="main" sx={{ flexGrow: 1, minHeight: 'calc(100vh - 200px)', padding: 3 }}>
          <CatalogPage />
        </Box>
        <Box
          component="footer"
          sx={{
            py: 4,
            mt: 8,
            textAlign: 'center',
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.getContrastText(theme.palette.secondary.main),
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Xperia Technology. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
