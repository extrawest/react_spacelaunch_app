import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';

import { NotFoundIntroImage } from '../../../assets/images';
import { RoutesObj } from '../../../types/constants';
import { NamespacesEnum } from '../../../types/enums';
import { CustomButton } from '../../common';
import { Intro } from '../../ui';
import { styles } from './NotFoundIntro.styles';

export const NotFoundIntro = () => {
  const { t } = useTranslation([NamespacesEnum.NotFound]);
  const navigate = useNavigate();

  const handleGoHome = useCallback(() => {
    navigate(RoutesObj.Home);
  }, [navigate]);

  return (
    <Intro
      bgimage={NotFoundIntroImage}
      hasGradient
    >
      <Stack sx={styles.wrapper}>
        <Typography
          variant="h1"
          sx={styles.title}
        >
          {t('not_found:title')}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={styles.subtitle}
        >
          {t('not_found:subtitle')}
        </Typography>
        <Typography
          variant="body2"
          sx={styles.description}
        >
          {t('not_found:description')}
        </Typography>
        <CustomButton onClick={handleGoHome}>
          {t('not_found:go_home')}
        </CustomButton>
      </Stack>
    </Intro>
  );
};
