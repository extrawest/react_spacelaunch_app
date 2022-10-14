import type { FC } from 'react';

import { CircularProgress, Stack, Typography } from '@mui/material';

import { styles } from './Loader.styles';
import type { LoaderProps } from './Loader.types';

export const Loader: FC<LoaderProps> = ({ label, mt = 0 }) => {
  return (
    <Stack
      spacing={1.25}
      sx={styles.wrapper({ mt })}
    >
      <CircularProgress
        variant="indeterminate"
        size={50}
        sx={styles.progress}
      />
      {label && (
        <Typography
          variant="body1"
          sx={styles.label}
        >
          {label}
        </Typography>
      )}
    </Stack>
  );
};
