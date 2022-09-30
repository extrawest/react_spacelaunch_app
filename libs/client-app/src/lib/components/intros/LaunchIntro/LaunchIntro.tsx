import type { FC } from 'react';
import Countdown from 'react-countdown';
import { useTranslation } from 'react-i18next';

import { Box, Stack, Typography } from '@mui/material';

import { LaunchIntroImage } from '../../../assets/images';
import { NamespacesEnum } from '../../../types/enums';
import { getLaunchImage } from '../../../utils';
import { Intro } from '../../ui';
import { styles } from './LaunchIntro.styles';
import type { LaunchIntroContentProps } from './LaunchIntro.types';

export const LaunchIntro: FC<LaunchIntroContentProps> = ({ launch }) => {
  const { t } = useTranslation([NamespacesEnum.Launch]);

  return (
    <Intro
      bgimage={getLaunchImage(launch) ?? LaunchIntroImage}
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
        <Countdown
          date={launch.window_start}
          renderer={(props) => {
            const { days, hours, minutes, seconds } = props.formatted;

            return (
              <Box sx={styles.timer}>
                <Typography
                  component="time"
                  variant="h1"
                >
                  {`${days} : ${hours} : ${minutes} : ${seconds}`}
                </Typography>
              </Box>
            );
          }}
        />
      </Stack>
    </Intro>
  );
};
