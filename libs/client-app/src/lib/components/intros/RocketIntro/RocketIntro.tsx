import type { FC } from 'react';

import { Stack, Typography } from '@mui/material';

import { RocketIntroImage } from '../../../assets/images';
import { Intro } from '../../ui';
import { styles } from './RocketIntro.styles';
import type { RocketIntroProps } from './RocketIntro.types';

export const RocketIntro: FC<RocketIntroProps> = () => {
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
          Falcon 9 Block 5
        </Typography>
        <Typography
          variant="subtitle1"
          sx={styles.subtitle}
        >
          SpaceX (SpX)
        </Typography>
        <Typography
          component="time"
          variant="subtitle1"
          sx={styles.date}
        >
          May 11, 2018
        </Typography>
        <Typography variant="body2">
          Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for
          the reliable and safe transport of satellites and the Dragon
          spacecraft into orbit. The Block 5 variant is the fifth major interval
          aimed at improving upon the ability for rapid reusability.
        </Typography>
      </Stack>
    </Intro>
  );
};
