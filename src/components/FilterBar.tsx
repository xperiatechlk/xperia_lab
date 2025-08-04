import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

interface Props {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  search: string;
  setSearch: (text: string) => void;
  category: string;
  setCategory: (cat: string) => void;
  subcategory: string;
  setSubcategory: (sub: string) => void;
  categoryMap: Record<string, string[]>;
}

const FilterBar: React.FC<Props> = ({
  viewMode,
  setViewMode,
  search,
  setSearch,
  category,
  setCategory,
  subcategory,
  setSubcategory,
  categoryMap,
}) => {
  return (
    <Box display="flex" flexWrap="wrap" alignItems="center" gap={2} mb={3}>
      <TextField
        variant="outlined"
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ minWidth: 200 }}
      />

      <FormControl sx={{ minWidth: 160 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          label="Category"
          onChange={(e) => {
            setCategory(e.target.value);
            setSubcategory('');
          }}
        >
          <MenuItem value="">All</MenuItem>
          {Object.keys(categoryMap).map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {category && (
        <FormControl sx={{ minWidth: 160 }}>
          <InputLabel>Subcategory</InputLabel>
          <Select
            value={subcategory}
            label="Subcategory"
            onChange={(e) => setSubcategory(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {categoryMap[category].map((sub) => (
              <MenuItem key={sub} value={sub}>
                {sub}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={(_, val) => val && setViewMode(val)}
        aria-label="view mode"
        sx={{ ml: 'auto' }}
      >
        <ToggleButton value="list" aria-label="list view">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="grid" aria-label="grid view">
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default FilterBar;
