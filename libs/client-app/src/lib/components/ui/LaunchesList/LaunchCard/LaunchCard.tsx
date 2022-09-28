import type { FC } from 'react';
import { Link as RouteLink } from 'react-router-dom';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { EmptyImage } from '../../../../assets/images';
import { RoutesObj } from '../../../../types/constants';
import { formatDate } from '../../../../utils';
import { CustomChip } from '../../../common';
import { styles } from './LaunchCard.styles';
import type { LaunchCardProps } from './LaunchCard.types';

export const LaunchCard: FC<LaunchCardProps> = ({ launch }) => {
  return (
    <Card sx={styles.card}>
      <CardActionArea
        to={RoutesObj.Launch(launch.id)}
        component={RouteLink}
        sx={styles.cardActionArea}
      >
        <CardMedia
          component="img"
          height={324}
          image={launch.image ?? EmptyImage}
        />
        <CardContent sx={styles.cardContent}>
          <Box sx={styles.chipWrapper}>
            <CustomChip
              label={formatDate(launch.window_start)}
              gradient
            />
          </Box>
          <Typography variant="subtitle1">{launch.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
