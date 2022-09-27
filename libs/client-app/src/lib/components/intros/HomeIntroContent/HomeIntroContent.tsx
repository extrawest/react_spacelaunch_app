import { useTranslation } from 'react-i18next';

import { Stack, Typography } from '@mui/material';

import { NamespacesEnum } from '../../../types/enums';
import { CustomButton } from '../../common';
import { styles } from './HomeIntroContent.styles';

export const HomeIntroContent = () => {
  const { t } = useTranslation([NamespacesEnum.Home]);

  return (
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
      <CustomButton>{t('home:show_launches')}</CustomButton>
    </Stack>
  );
};
