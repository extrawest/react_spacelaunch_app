import type { FC } from 'react';

import { Grid, Stack, Typography } from '@mui/material';

import { range } from '@vladyslav.haiduk_react/shared/utils';

import { LaunchCard } from './LaunchCard/LaunchCard';
import { LaunchCardSkeleton } from './LaunchCardSkeleton/LaunchCardSkeleton';
import { styles } from './LaunchesList.styles';
import type { LaunchesListProps } from './LaunchesList.types';

export const LaunchesList: FC<LaunchesListProps> = ({
  title,
  launches,
  loading,
}) => {
  return (
    <Stack spacing={5}>
      <Typography
        variant="h2"
        sx={styles.title}
      >
        {title}
      </Typography>
      <div>
        <Grid
          container
          columnSpacing={2.5}
          rowSpacing={6.25}
        >
          {loading
            ? range(6).map((i) => (
                <Grid
                  item
                  key={i}
                  lg={6}
                >
                  <LaunchCardSkeleton />
                </Grid>
              ))
            : launches?.map((launch) => (
                <Grid
                  item
                  key={launch.id}
                  lg={6}
                >
                  <LaunchCard launch={launch} />
                </Grid>
              ))}
        </Grid>
      </div>
    </Stack>
  );
};
