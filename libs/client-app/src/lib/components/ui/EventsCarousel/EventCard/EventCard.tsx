import type { FC } from 'react';
import { Link as RouteLink } from 'react-router-dom';

import {
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
import { styles } from './EventCard.styles';
import type { EventCardProps } from './EventCard.types';

export const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <Card sx={styles.card}>
      <CardActionArea
        to={RoutesObj.Event(event.id)}
        component={RouteLink}
        sx={styles.cardActionArea}
      >
        <CardMedia
          component="img"
          image={event.feature_image ?? EmptyImage}
          height={264}
        />
        <CardContent sx={styles.cardContent}>
          <CustomChip label={formatDate(event.date)} />
          <Typography variant="subtitle1">{event.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
