// src/components/ShopInfoCard.tsx
import React from 'react';
import { Paper, Stack, Typography, Link, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const ShopInfoCard: React.FC = () => {
  return (
    <Paper
      elevation={6}
      sx={{
        position: 'relative',
        flex: '1 1 40%',
        maxWidth: { xs: '100%', md: '40%' },
        p: 5,
        borderRadius: 5,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        textAlign: 'left',
        boxShadow: '0 12px 24px rgba(193, 178, 215, 0.25)',
        transition: 'all 0.4s ease',
        '&:hover': {
          boxShadow: '0 20px 50px rgba(153, 102, 204, 0.4)',
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      {/* Faded background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: 'url(/images/card-bg.png)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
          Shop Information
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <AccessTimeIcon sx={{ fontSize: 20, color: 'primary.main', animation: 'bounce 3s infinite' }} />
          <Typography fontSize="1rem" fontWeight={500}>
            Open Hours: <strong>Mon - Fri, 9am - 6pm</strong>
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <LocationOnIcon
            sx={{ fontSize: 20, color: 'primary.main', animation: 'bounce 3s infinite', animationDelay: '0.3s' }}
          />
          <Typography fontSize="1rem" fontWeight={500}>
            Address: <strong>123 Tech Street, Cityville</strong>
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <EmailIcon
            sx={{ fontSize: 20, color: 'primary.main', animation: 'bounce 3s infinite', animationDelay: '0.6s' }}
          />
          <Typography fontSize="1rem" fontWeight={500}>
            Email:{' '}
            <Link href="mailto:contact@xperiatech.com" underline="hover" color="primary">
              contact@xperiatech.com
            </Link>
          </Typography>
        </Stack>
      </Box>

      {/* Keyframes for bounce */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
        `}
      </style>
    </Paper>
  );
};

export default ShopInfoCard;
