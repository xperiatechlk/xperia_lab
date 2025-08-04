import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
  Paper,
  Stack,
  Button,
  Divider,
  colors,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from '../images/logo.png';
import ShopInfoCard from './ShopInfoCard';
import ContactCard from './ContactCard';
import BackgroundImage from '../images/bg.webp';

// Simple CSS keyframes for bounce effect on icons
const bounceKeyframe = {
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
};

const MainHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
    component="header"
    sx={{
      py: { xs: 5, sm: 7 },
      textAlign: 'center',
      color: theme.palette.primary.main,
      position: 'relative',
      zIndex: 10,
  
      // Semi-transparent gradient with more color stops
      background: `linear-gradient(
        135deg,
        rgba(126, 87, 194, 0.25) 0%,         /* purple, semi-transparent */
        rgba(193, 178, 215, 0.3) 30%,       /* lavender */
        rgba(255, 183, 77, 0.25) 60%,       /* warm orange */
        rgba(129, 212, 250, 0.25) 100%      /* light blue */
      )`,
      backgroundSize: '200% 200%',
      animation: 'gradientShift 15s ease infinite',
  
      '@keyframes gradientShift': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    }}
  >
  
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? 'h3' : 'h1'}
          component="h1"
          gutterBottom
          sx={{ fontWeight: 900, letterSpacing: 1.5, textShadow: '1px 1px 4px rgba(0,0,0,0.1)' }}
        >
          <span style={{color:'#E55E67'}}>Xperia</span><span style={{color:'#645D60'}} >Lab</span>
        </Typography>

        <Typography
          variant={isMobile ? 'body1' : 'h6'}
          component="p"
          color="text.primary"
          mb={3}
          sx={{ maxWidth: 600, mx: 'auto', fontWeight: 600 }}
        >
          Discover quality products from top brands in electronics, accessories, and more.
        </Typography>

        {/* Call to action button */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mb: 4, fontWeight: 'bold', letterSpacing: 0.5 }}
          href="#catalog"
          aria-label="Shop Now"
          disableElevation
        >
          Shop Now
        </Button>

        <Divider
          sx={{
            width: 80,
            height: 4,
            mx: 'auto',
            mb: 4,
            borderRadius: 2,
            background: theme.palette.secondary.main,
            boxShadow: `0 0 10px ${theme.palette.secondary.main}`,
          }}
        />

        {/* Decorative animated circles behind the logo */}
        <Box
          sx={{
            position: 'relative',
            width: 300,
            height: 300,
            mx: 'auto',
            mb: 6,
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              borderRadius: '50%',
              opacity: 0.15,
              animation: 'pulse 4s ease-in-out infinite',
            },
            '&::before': {
              width: 180,
              height: 180,
              background: theme.palette.secondary.light,
              top: 40,
              left: 60,
              animationDelay: '0s',
            },
            '&::after': {
              width: 150,
              height: 150,
              background: theme.palette.primary.light,
              top: 60,
              left: 80,
              animationDelay: '2s',
            },
            '@keyframes pulse': {
              '0%, 100%': { opacity: 0.15, transform: 'scale(1)' },
              '50%': { opacity: 0.3, transform: 'scale(1.1)' },
            },
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Shop hero"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 4,
              boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          />
        </Box>

        <Box
        sx={{
          flex: '1 1 300px',
          p: 3,
          backgroundImage: BackgroundImage, // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', 
          borderRadius: 2, 
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <ShopInfoCard />
        <ContactCard />
      </Box>
      </Container>
    </Box>
  );
};

export default MainHeader;
