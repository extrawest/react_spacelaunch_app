import type { FC } from 'react';

import { Box, CircularProgress } from '@mui/material';

import { styles } from './Spinner.styles';
import type { SpinnerProps } from './Spinner.types';

export const Spinner: FC<SpinnerProps> = ({ variant = 'relative' }) => {
  const fixed = variant === 'fixed';

  return (
    <Box sx={styles.wrapper({ fixed })}>
      <CircularProgress
        color="primary"
        size={75}
        thickness={4.5}
      />
    </Box>
  );
};
