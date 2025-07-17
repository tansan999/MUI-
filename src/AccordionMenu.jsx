import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const muiComponents = {
  'Входы (Inputs)': [
    'Autocomplete', 'Button', 'Button Group', 'Checkbox',
    'Floating Action Button', 'Radio Group', 'Rating', 'Select',
    'Slider', 'Switch', 'Text Field', 'Transfer List', 'Toggle Button',
  ],
  'Отображение данных (Data Display)': [
    'Avatar', 'Badge', 'Chip', 'Divider', 'Icons', 'List',
    'Table', 'Tooltip', 'Typography',
  ],
  'Обратная связь (Feedback)': [
    'Alert', 'Backdrop', 'Dialog', 'Progress', 'Skeleton', 'Snackbar',
  ],
  'Поверхность (Surfaces)': ['Accordion', 'App Bar', 'Card', 'Paper'],
  'Навигация (Navigation)': [
    'Bottom Navigation', 'Breadcrumbs', 'Drawer', 'Link',
    'Menu', 'Pagination', 'Speed Dial', 'Stepper', 'Tabs',
  ],
  'Макет (Layout)': ['Box', 'Container', 'Grid', 'Image List', 'Stack'],
  'Лаборатория (Lab)': ['Date/Time Pickers', 'Loading Button', 'Timeline', 'Tree View'],
  'Утилиты (Utils)': [
    'ClickAwayListener', 'CssBaseline', 'Modal', 'NoSsr',
    'Popover', 'Popper', 'Portal', 'Textarea Autosize',
    'Transitions', 'useMediaQuery', 'useTheme',
  ],
};

// Генерация URL-ов
const getDocUrl = (componentName) => {
  const base = 'https://mui.com/material-ui/react-';
  const normalized = componentName
    .toLowerCase()
    .replace(/\s+/g, '-') // Пробелы в тире
    .replace('floating-action-button', 'floating-action-button/')
    .replace('button-group', 'button-group/')
    .replace('text-field', 'text-field/')
    .replace('toggle-button', 'toggle-button/')
    .replace('speed-dial', 'speed-dial/')
    .replace('loading-button', 'loading-button/')
    .replace('date/time-pickers', 'date-picker/'); // специальное правило
  return base + normalized;
};

const AccordionMenu = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', mt: 4 }}>
      {Object.entries(muiComponents).map(([category, items]) => (
        <Accordion key={category}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">{category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul style={{ margin: 0, paddingLeft: 16 }}>
              {items.map((item) => (
                <li key={item}>
                  <Link
                    href={getDocUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AccordionMenu;
