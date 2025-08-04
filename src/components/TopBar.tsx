// src/components/TopBar.tsx
import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'; 
import bg from '../images/bg.webp';
const TopBar: React.FC<{ visible: boolean }> = ({ visible }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <Box
        component="div"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: isMobile ? 48 : 56,
          px: 3,
          py: 1,
          color: theme.palette.getContrastText(theme.palette.primary.main),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: isMobile ? '1rem' : '1.25rem',
          zIndex: 20,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          backgroundImage: `linear-gradient(rgba(193, 178, 215, 0.7), rgba(193, 178, 215, 0.7)), url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ m: 0 }}>
        <span style={{color:'#E55E67'}}>Xperia</span><span style={{color:'#645D60'}} >Lab</span>
        </Typography>
      </Box>
    );
  };
  
  export default TopBar;