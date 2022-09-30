import type { FC } from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Stack, Typography } from '@mui/material';

import { NamespacesEnum } from '../../../types/enums';
import { ChipsList, PropertyValue } from '../../common';
import { styles } from './LaunchOverview.styles';
import type { LaunchOverviewProps } from './LaunchOverview.types';
import { getLaunchChips } from './LaunchOverview.utils';

export const LaunchOverview: FC<LaunchOverviewProps> = ({ launch }) => {
  const { t } = useTranslation([NamespacesEnum.Launch]);

  const chips = useMemo(() => getLaunchChips(launch), [launch]);

  return (
    <Stack sx={styles.wrapper}>
      <Typography
        variant="h2"
        sx={styles.title}
      >
        {t('launch:launch_overview_title')}
      </Typography>
      <Stack spacing={0.625}>
        {launch.rocket.spacecraft_stage?.destination && (
          <PropertyValue property="Destination">
            {launch.rocket.spacecraft_stage?.destination}
          </PropertyValue>
        )}
        <PropertyValue property="Mission">{launch.mission.type}</PropertyValue>
      </Stack>
      <Box sx={styles.chipsWrapper}>
        <ChipsList
          chips={chips}
          gap={2.5}
        />
      </Box>
      <Typography variant="body2">{launch.mission.description}</Typography>
    </Stack>
  );
};
