import type { SxProps } from '@mui/material';

const card: SxProps = {
  borderRadius: 0,
  boxShadow: 0,
};

const cardContent: SxProps = {
  p: 0,
  pt: 2.5,
  '&:last-child': {
    pb: 0,
  },
  '& > *:first-child': {
    mb: 1.875,
  },
};

export const styles = { card, cardContent };
