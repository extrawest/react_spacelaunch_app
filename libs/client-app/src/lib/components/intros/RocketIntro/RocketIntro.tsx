import type { FC } from 'react';

import { Stack, Typography } from '@mui/material';

import { RocketIntroImage } from '../../../assets/images';
import { Intro } from '../../ui';
import { styles } from './RocketIntro.styles';
import type { RocketIntroProps } from './RocketIntro.types';
import { formatMaidenFlightDate } from './RocketIntro.utils';

export const RocketIntro: FC<RocketIntroProps> = ({ rocket }) => {
  return (
    <Intro
      bgimage={RocketIntroImage}
      hasGradient
    >
      <Stack sx={styles.wrapper}>
        <Typography
          variant="h1"
          sx={styles.title}
        >
          {rocket.full_name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={styles.subtitle}
        >
          {rocket.launch_service_provider.name} (
          {rocket.launch_service_provider.abbrev})
        </Typography>
        <Typography
          component="time"
          variant="subtitle1"
          sx={styles.date}
        >
          {formatMaidenFlightDate(rocket.maiden_flight)}
        </Typography>
        <Typography variant="body2">{rocket.description}</Typography>
      </Stack>
    </Intro>
  );
};