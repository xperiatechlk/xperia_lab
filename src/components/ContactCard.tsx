// src/components/ContactCard.tsx
import React from 'react';
import {
  Paper,
  Stack,
  Typography,
  Link,
  useTheme,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const bounceKeyframe = {
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
};

const ContactCard: React.FC = () => {
  const theme = useTheme();

  return (
    <Paper
      elevation={6}
      sx={{
        p: 5,
        width: { xs: '100%', sm: '45%', md: '40%' },
        borderRadius: 5,
        textAlign: 'left',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.paper',
        boxShadow: '0 12px 24px rgba(193, 178, 215, 0.25)',
        backgroundImage: 'url(/images/card-bg2.jpg)', // 🖼️ Replace with your image path
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)', // translucent white overlay
          zIndex: 1,
        },
        '& > *': {
          position: 'relative',
          zIndex: 2,
        },
        transition: 'box-shadow 0.4s ease, background-color 0.4s ease',
        '&:hover': {
          boxShadow: '0 16px 40px rgba(193, 178, 215, 0.45)',
        },
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Contact Us
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
        <PhoneIcon color="primary" sx={{ animation: `${bounceKeyframe} 3s ease-in-out infinite` }} />
        <Typography fontSize="1.1rem" fontWeight={600}>
          Phone: +1 (555) 123-4567
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
        <SupportAgentIcon
          color="primary"
          sx={{ animation: `${bounceKeyframe} 3s ease-in-out infinite`, animationDelay: '0.3s' }}
        />
        <Typography fontSize="1.1rem" fontWeight={600}>
          Support: +1 (555) 987-6543
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
        <Typography fontSize="1.1rem" fontWeight={600}>
          Social:
        </Typography>

        <Link
          href="https://twitter.com/xperiatech"
          target="_blank"
          rel="noopener"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            fontWeight: 600,
            color: theme.palette.primary.main,
            '&:hover': { color: theme.palette.primary.dark },
            transition: 'color 0.3s ease',
          }}
        >
          <TwitterIcon /> Twitter
        </Link>

        <Link
          href="https://facebook.com/xperiatech"
          target="_blank"
          rel="noopener"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            fontWeight: 600,
            color: theme.palette.primary.main,
            '&:hover': { color: theme.palette.primary.dark },
            transition: 'color 0.3s ease',
          }}
        >
          <FacebookIcon /> Facebook
        </Link>
      </Stack>
    </Paper>
  );
};

export default ContactCard;
