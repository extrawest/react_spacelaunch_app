import type { FC } from 'react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';

import { RoutesObj } from '../../../types/constants';
import { NamespacesEnum } from '../../../types/enums';
import { CustomButton, PropertyValue } from '../../common';
import { styles } from './RocketInfo.styles';
import type { RocketInfoProps } from './RocketInfo.types';

export const RocketInfo: FC<RocketInfoProps> = ({ rocket }) => {
  const { t } = useTranslation([NamespacesEnum.Launch]);
  const navigate = useNavigate();

  const handleOpenRocketDetails = useCallback(() => {
    navigate(RoutesObj.Rocket(rocket.configuration.id));
  }, [navigate, rocket]);

  return (
    <Stack sx={styles.wrapper}>
      <Typography
        variant="h2"
        sx={styles.title}
      >
        {rocket.configuration.full_name}
      </Typography>
      <Stack spacing={0.625}>
        <PropertyValue property="Family">
          {rocket.configuration.family}
        </PropertyValue>
        {rocket.configuration.variant && (
          <PropertyValue property="Configuration">
            {rocket.configuration.variant}
          </PropertyValue>
        )}
      </Stack>
      <Typography
        variant="body2"
        sx={styles.description}
      >
        {rocket.configuration.description}
      </Typography>
      <CustomButton onClick={handleOpenRocketDetails}>
        {t('launch:open_rocket_details')}
      </CustomButton>
    </Stack>
  );
};
