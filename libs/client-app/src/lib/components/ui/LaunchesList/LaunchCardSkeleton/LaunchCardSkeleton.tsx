import { Skeleton, Stack, Typography } from '@mui/material';

import { styles } from './LaunchCardSkeleton.styles';

export const LaunchCardSkeleton = () => {
  return (
    <Stack sx={styles.wrapper}>
      <Skeleton
        variant="rectangular"
        sx={styles.image}
      />
      <Skeleton
        variant="rounded"
        sx={styles.date}
      />
      <Typography variant="subtitle1">
        <Skeleton variant="text" />
      </Typography>
    </Stack>
  );
};
