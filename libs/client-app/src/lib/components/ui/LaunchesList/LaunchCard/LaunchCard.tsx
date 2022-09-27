import type { FC } from 'react';

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { EmptyImage } from '../../../../assets/images';
import { formatDate } from '../../../../utils';
import { CustomChip } from '../../../common';
import { styles } from './LaunchCard.styles';
import type { LaunchCardProps } from './LaunchCard.types';

export const LaunchCard: FC<LaunchCardProps> = ({ launch }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        height={324}
        image={launch.image ?? EmptyImage}
      />
      <CardContent sx={styles.cardContent}>
        <Box sx={styles.chipWrapper}>
          <CustomChip
            label={formatDate(launch.date)}
            gradient
          />
        </Box>
        <Typography variant="subtitle1">{launch.name}</Typography>
      </CardContent>
    </Card>
  );
};
