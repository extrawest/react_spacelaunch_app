import type { SxProps, Theme } from '@mui/material';
import { cardActionAreaClasses } from '@mui/material';

const card: SxProps = {
  position: 'relative',
  bgcolor: 'transparent',
  borderRadius: 0,
  boxShadow: 0,
};

const cardActionArea: SxProps<Theme> = (theme) => ({
  transitionProperty: 'transform',
  transitionDuration: `${theme.transitions.duration.short}ms`,
  transitionTimingFunction: theme.transitions.easing.easeInOut,
  [`& .${cardActionAreaClasses.focusHighlight}`]: {
    background: 'transparent',
  },
  '&:hover': {
    transform: 'scale(0.985)',
  },
  '&:focus': {
    transform: 'scale(0.985)',
  },
});

const cardContent: SxProps = {
  p: 0,
  pt: 5,
  textAlign: 'center',
  '&:last-child': {
    pb: 0,
  },
};

const chipWrapper: SxProps = {
  position: 'absolute',
  top: 324,
  right: '50%',
  transform: 'translate(50%, -50%)',
};

export const styles = { card, cardActionArea, cardContent, chipWrapper };
