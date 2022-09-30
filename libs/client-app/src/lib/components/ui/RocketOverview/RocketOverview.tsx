import type { FC } from 'react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';

import { RoutesObj } from '../../../types/constants';
import { NamespacesEnum } from '../../../types/enums';
import { CustomButton, PropertyValue } from '../../common';
import { styles } from './RocketOverview.styles';
import type { RocketOverviewProps } from './RocketOverview.types';

export const RocketOverview: FC<RocketOverviewProps> = ({ rocket }) => {
  const { t } = useTranslation([NamespacesEnum.Launch]);
  const navigate = useNavigate();

  const handleOpenRocketDetails = useCallback(() => {
    navigate(RoutesObj.Rocket(rocket.id));
  }, [navigate, rocket]);

  return (
    <Stack sx={styles.wrapper}>
      <Typography
        variant="h2"
        sx={styles.title}
      >
        {rocket.full_name}
      </Typography>
      <Stack spacing={0.625}>
        <PropertyValue property="Family">{rocket.family}</PropertyValue>
        {rocket.variant && (
          <PropertyValue property="Configuration">
            {rocket.variant}
          </PropertyValue>
        )}
      </Stack>
      <Typography
        variant="body2"
        sx={styles.description}
      >
        {rocket.description}
      </Typography>
      <CustomButton onClick={handleOpenRocketDetails}>
        {t('launch:open_rocket_details')}
      </CustomButton>
    </Stack>
  );
};
