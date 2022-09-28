import type { FC } from 'react';

import { Stack, Typography } from '@mui/material';

import { LaunchIntroImage } from '../../../assets/images';
import { Intro } from '../../ui';
import type { LaunchIntroContentProps } from './LaunchIntro.types';

export const LaunchIntro: FC<LaunchIntroContentProps> = ({ launch }) => {
  return (
    <Intro bgimage={launch.image ?? LaunchIntroImage}>
      <Stack>
        <Typography variant="h1">{launch.name}</Typography>
      </Stack>
    </Intro>
  );
};
