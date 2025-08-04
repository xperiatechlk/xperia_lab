// src/components/CatalogItem.tsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
  Box,
} from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import { CatalogItemType } from '../types';

interface Props {
  item: CatalogItemType;
  onView: (item: CatalogItemType) => void; // callback when "View" clicked
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Mobile Phones': <PhoneAndroidIcon sx={{ fontSize: 80, color: 'text.secondary' }} />,
  Laptops: <LaptopMacIcon sx={{ fontSize: 80, color: 'text.secondary' }} />,
  Accessories: <DevicesOtherIcon sx={{ fontSize: 80, color: 'text.secondary' }} />,
};

const CatalogItem: React.FC<Props> = ({ item, onView }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {item.imageUrl && !imgError ? (
        <CardMedia
          component="img"
          height="140"
          image={item.imageUrl}
          alt={item.title}
          onError={() => setImgError(true)}
          sx={{ objectFit: 'contain' }}
        />
      ) : (
        <Box
          sx={{
            height: 140,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'background.default',
          }}
          aria-label={`${item.category} icon fallback`}
        >
          {categoryIcons[item.category] || <DevicesOtherIcon sx={{ fontSize: 80, color: 'text.secondary' }} />}
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {item.description}
        </Typography>
        <Typography variant="caption" color="primary">
          {item.category} → {item.subcategory}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onView(item)}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default CatalogItem;
