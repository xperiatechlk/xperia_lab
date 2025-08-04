import React, { useState } from 'react';
import { Grid, List, ListItem, Box } from '@mui/material';
import CatalogItem from './CatalogItem';
import ProductDetailsDialog from './ProductDetailsDialog';
import { CatalogItemType } from '../types';

interface Props {
  items: CatalogItemType[];
  viewMode: 'grid' | 'list';
}

const CatalogList: React.FC<Props> = ({ items, viewMode }) => {
  const [selectedItem, setSelectedItem] = useState<CatalogItemType | null>(null);
    const [view, setView] = useState<'grid' | 'list'>('grid');

  const handleView = (item: CatalogItemType) => {
    setSelectedItem(item);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
  };

  return (
    <>
      {viewMode === 'grid' ? (
        <Grid container spacing={2}>
          {items.map((item) => (
            <Box  sx={{
                flex: view === 'grid' ? '1 1 calc(100% - 16px)' : '1 1 100%',
                maxWidth: view === 'grid' ? '100%' : '100%',
                minWidth: 0,
                ...(view === 'grid' && {
                  '@media (min-width:600px)': {
                    flex: '1 1 calc(50% - 16px)',
                  },
                  '@media (min-width:900px)': {
                    flex: '1 1 calc(33.333% - 16px)',
                  },
                }),
              }}
            >
              <Box>
                <CatalogItem item={item} onView={handleView} />
              </Box>
            </Box>
          ))}
        </Grid>
      ) : (
        <List>
          {items.map((item) => (
            <ListItem key={item.id} sx={{ mb: 2 }} divider>
              <Box width="100%">
                <CatalogItem item={item} onView={handleView} />
              </Box>
            </ListItem>
          ))}
        </List>
      )}

      <ProductDetailsDialog open={!!selectedItem} item={selectedItem} onClose={handleCloseDialog} />
    </>
  );
};

export default CatalogList;
