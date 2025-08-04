import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { CatalogItemType } from '../types';

interface Props {
  open: boolean;
  item: CatalogItemType | null;
  onClose: () => void;
}

const ProductDetailsDialog: React.FC<Props> = ({ open, item, onClose }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md')); // md and up = large screen

  if (!item) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{item.title}</DialogTitle>
      <DialogContent dividers>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isLargeScreen ? 'row' : 'column',
            gap: 2,
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={item.imageUrl}
            alt={item.title}
            sx={{
              width: isLargeScreen ? '40%' : '100%',
              height: 'auto',
              borderRadius: 1,
              objectFit: 'contain',
            }}
          />

          {/* Details */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" gutterBottom>
              {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {item.category} &nbsp; | &nbsp; Subcategory: {item.subcategory}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDetailsDialog;
