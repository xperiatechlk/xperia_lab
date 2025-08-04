// src/components/CategoryFilter.tsx
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CategoryFilterProps {
  categories: Record<string, string[]>;
  selected: string[];
  onChange: (value: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selected, onChange }) => {
  return (
    <>
      {Object.entries(categories).map(([mainCategory, subcategories]) => (
        <Accordion key={mainCategory}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">{mainCategory}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {subcategories.map((sub) => (
              <FormControlLabel
                key={sub}
                control={
                  <Checkbox
                    checked={selected.includes(sub)}
                    onChange={() => onChange(sub)}
                  />
                }
                label={sub}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default CategoryFilter;
