import type { FC } from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Stack, Typography } from '@mui/material';

import { mapValues } from 'lodash';

import { useCurrentDate } from '@vladyslav.haiduk_react/shared/hooks';
import {
  compareDates,
  formatTimeNumber,
} from '@vladyslav.haiduk_react/shared/utils';

import { LaunchIntroImage } from '../../../assets/images';
import { NamespacesEnum } from '../../../types/enums';
import { Intro } from '../../ui';
import { styles } from './LaunchIntro.styles';
import type { LaunchIntroContentProps } from './LaunchIntro.types';

export const LaunchIntro: FC<LaunchIntroContentProps> = ({ launch }) => {
  const { t } = useTranslation([NamespacesEnum.Launch]);
  const date = useCurrentDate();

  const { days, hours, minutes, seconds } = useMemo(() => {
    const diff = compareDates(launch.window_start, date);
    return mapValues(diff, formatTimeNumber);
  }, [launch, date]);

  return (
    <Intro
      bgimage={launch.image ?? LaunchIntroImage}
      hasGradient
    >
      <Stack sx={styles.wrapper}>
        <Typography
          variant="h1"
          sx={styles.title}
        >
          {launch.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={styles.subtitle}
        >
          {t('launch:open_launch')}
        </Typography>
        <Box sx={styles.timer}>
          <Typography
            component="time"
            variant="h1"
          >
            {`${days} : ${hours} : ${minutes} : ${seconds}`}
          </Typography>
        </Box>
      </Stack>
    </Intro>
  );
};
