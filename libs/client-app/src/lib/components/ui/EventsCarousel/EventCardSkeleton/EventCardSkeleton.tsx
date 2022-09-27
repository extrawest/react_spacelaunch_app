import { Skeleton, Stack, Typography } from '@mui/material';

import { styles } from './EventCardSkeleton.styles';

export const EventCardSkeleton = () => {
  return (
    <Stack>
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
