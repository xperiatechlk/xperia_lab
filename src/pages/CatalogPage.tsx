import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Pagination,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';

import CategoryFilter from '../components/CategoryFilter';
import CatalogList from '../components/CatalogList';
import ProductDetailsDialog from '../components/ProductDetailsDialog';
import { CatalogItemType } from '../types';

import { allItems } from '../data/items';
import { categoryStructure } from '../data/categories';

const CatalogPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [selectedSubs, setSelectedSubs] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [itemsPerPage, setItemsPerPage] = useState(isDesktop ? 12 : 3);
  const [page, setPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<CatalogItemType | null>(null);

  // Track if sticky bar is currently stuck
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setItemsPerPage(isDesktop ? 12 : 3);
    setPage(1);
  }, [isDesktop]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return;
      const rect = stickyRef.current.getBoundingClientRect();
      setIsSticky(rect.top <= 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubcategoryChange = (sub: string) => {
    setSelectedSubs((prev) =>
      prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub]
    );
    setPage(1);
  };

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedSubs.length === 0 || selectedSubs.includes(item.subcategory);
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedSubs]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<string>) => {
    setItemsPerPage(Number(event.target.value));
    setPage(1);
  };

  const handleViewChange = (newView: 'grid' | 'list') => {
    setView(newView);
  };

  const handleView = (item: CatalogItemType) => {
    setSelectedItem(item);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
  };

  return (
    <Container sx={{ mt: 4 }}>
      {/* Sticky top bar */}
      <Box
        ref={stickyRef}
        sx={{
          position: 'sticky',
          top: 55,
          zIndex: 1100,
          pt: isSticky ? 6 : 2,
          px: isSticky ? 3 : 2,
          borderRadius: 3,
          mt:isSticky ? 1 : 0,
          pb: 2,
          mb: 3,
          backgroundColor: 'background.paper',
          boxShadow: isSticky ? '0 2px 4px rgb(0 0 0 / 0.1)' : 'none',
          borderBottom: isSticky ? '1px solid' : 'none',
          borderColor: isSticky ? 'divider' : 'transparent',
          transition: 'all 0.3s, box-shadow 0.3s, border-color 0.3s',
          // Force flex row and wrap on xs and up to keep controls in one line
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          width: '100%',
          flexDirection: 'row', 
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            flexShrink: 0,
            minWidth: 200,
          }}
        >
          Product Catalog
        </Typography>

        {/* Search bar */}
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          sx={{ flexGrow: 1, minWidth: 200, maxWidth: 400 }}
        />

        {/* View toggle and items per page */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap',
            minWidth: 280,
          }}
        >
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={(_e, val) => val && handleViewChange(val)}
            size="small"
            aria-label="view toggle"
          >
            <ToggleButton value="grid" aria-label="grid view">
              <GridViewIcon sx={{ mr: 1 }} /> 
            </ToggleButton>
            <ToggleButton value="list" aria-label="list view">
              <ViewListIcon sx={{ mr: 1 }} /> 
            </ToggleButton>
          </ToggleButtonGroup>

          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel id="items-per-page-label">Items per page</InputLabel>
            <Select
              labelId="items-per-page-label"
              value={itemsPerPage.toString()}
              label="Items per page"
              onChange={handleItemsPerPageChange}
            >
              {[3, 6, 9, 12].map((count) => (
                <MenuItem key={count} value={count.toString()}>
                  {count}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        {/* Filters */}
        <Box sx={{ flex: '0 0 250px', width: { xs: '100%', md: '250px' } }}>
          <CategoryFilter
            categories={categoryStructure}
            selected={selectedSubs}
            onChange={handleSubcategoryChange}
          />
        </Box>

        {/* Results */}
        <Box sx={{ flexGrow: 1 }}>
          <CatalogList items={paginatedItems} viewMode={view} />

          {/* Pagination */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              shape="rounded"
              siblingCount={1}
              boundaryCount={1}
              disabled={totalPages === 0}
            />
          </Box>
        </Box>
      </Box>

      {/* Product details dialog */}
      <ProductDetailsDialog open={!!selectedItem} item={selectedItem} onClose={handleCloseDialog} />
    </Container>
  );
};

export default CatalogPage;
