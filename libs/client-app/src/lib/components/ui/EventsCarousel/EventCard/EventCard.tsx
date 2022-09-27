import type { FC } from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { EmptyImage } from '../../../../assets/images';
import { formatDate } from '../../../../utils';
import { CustomChip } from '../../../common';
import { styles } from './EventCard.styles';
import type { EventCardProps } from './EventCard.types';

export const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        image={event.image ?? EmptyImage}
        height={264}
      />
      <CardContent sx={styles.cardContent}>
        <CustomChip label={formatDate(event.date)} />
        <Typography variant="subtitle1">{event.name}</Typography>
      </CardContent>
    </Card>
  );
};
