import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Typography } from '@mui/material';

import { HomeIntroImage } from '../../../assets/images';
import { NamespacesEnum } from '../../../types/enums';
import { CustomButton } from '../../common';
import { Intro } from '../../ui';
import { styles } from './HomeIntro.styles';
import type { HomeIntroProps } from './HomeIntro.types';

export const HomeIntro: FC<HomeIntroProps> = ({ onShowLaunches }) => {
  const { t } = useTranslation([NamespacesEnum.Home]);

  return (
    <Intro bgimage={HomeIntroImage}>
      <Stack sx={styles.wrapper}>
        <Typography
          variant="h1"
          sx={styles.title}
        >
          {t('home:title')}
        </Typography>
        <Typography
          variant="body2"
          sx={styles.description}
        >
          {t('home:description')}
        </Typography>
        <CustomButton onClick={onShowLaunches}>
          {t('home:show_launches')}
        </CustomButton>
      </Stack>
    </Intro>
  );
};
