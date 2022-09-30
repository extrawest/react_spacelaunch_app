import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Stack, Typography } from '@mui/material';

import { NamespacesEnum } from '../../../types/enums';
import { formatDate } from '../../../utils';
import { CustomChip, PropertyValue } from '../../common';
import { styles } from './RelatedEventInfo.styles';
import type { RelatedEventInfoProps } from './RelatedEventInfo.types';

export const RelatedEventInfo: FC<RelatedEventInfoProps> = ({ launch }) => {
  const { t } = useTranslation([NamespacesEnum.Event]);

  return (
    <Stack spacing={5}>
      <Typography
        variant="h2"
        sx={styles.title}
      >
        {t('event:related_info_title')}
      </Typography>
      <Stack sx={styles.infoWrapper}>
        {launch.image && (
          <Box sx={styles.imgWrapper}>
            <img
              src={launch.image}
              alt="event"
            />
          </Box>
        )}
        <Stack sx={styles.content}>
          <Typography
            variant="subtitle1"
            sx={styles.contentTitle}
          >
            {launch.name}
          </Typography>
          <CustomChip label={formatDate(launch.window_start)} />
          <Stack
            spacing={0.625}
            sx={styles.propsWrapper}
          >
            <PropertyValue property={t('event:launch_mission_property')}>
              {launch.mission}
            </PropertyValue>
            <PropertyValue property={t('event:launch_mission_type_property')}>
              {launch.mission_type}
            </PropertyValue>
            <PropertyValue property={t('event:launch_location_property')}>
              {launch.location}
            </PropertyValue>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
