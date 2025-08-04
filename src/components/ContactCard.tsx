import React from 'react';
import {
  Paper,
  Stack,
  Typography,
  Link,
  useTheme,
  Box,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const contactInfo = [
  {
    label: 'Phone',
    value: '+1 (555) 123-4567',
    icon: <PhoneIcon sx={{ fontSize: 20, color: 'primary.main', animation: 'bounce 3s infinite' }} />,
  },
  {
    label: 'Support',
    value: '+1 (555) 987-6543',
    icon: <SupportAgentIcon sx={{ fontSize: 20, color: 'primary.main', animation: 'bounce 3s infinite', animationDelay: '0.3s' }} />,
  },
];

const socialLinks = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/xperiatech',
    icon: <TwitterIcon sx={{ fontSize: 20 }} />,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/xperiatech',
    icon: <FacebookIcon sx={{ fontSize: 20 }} />,
  },
];

const ContactCard: React.FC = () => {
  const theme = useTheme();

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
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: 'url(/images/card-bg2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
          Contact Us
        </Typography>

        {/* Contact Info */}
        {contactInfo.map((info, index) => (
          <Stack key={index} direction="row" alignItems="center" spacing={1} mb={2}>
            {info.icon}
            <Typography fontSize="1rem" fontWeight={500}>
              {info.label}: <strong>{info.value}</strong>
            </Typography>
          </Stack>
        ))}

        {/* Social Links */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
          <Typography fontSize="1rem" fontWeight={500}>
            Social:
          </Typography>
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                fontSize: '0.95rem',
                fontWeight: 500,
                color: theme.palette.primary.main,
                '&:hover': { color: theme.palette.primary.dark },
                transition: 'color 0.3s ease',
              }}
            >
              {social.icon} {social.label}
            </Link>
          ))}
        </Stack>
      </Box>

      {/* Bounce Keyframes */}
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

export default ContactCard;
