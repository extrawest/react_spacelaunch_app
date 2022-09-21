import { useTranslation } from 'react-i18next';

import { Paper, Typography } from '@mui/material';

import { Meta } from '../../components/ui';
import { NamespacesEnum } from '../../types/enums';

export const HomeContainer = () => {
  const { t } = useTranslation([NamespacesEnum.Home]);

  return (
    <>
      <Meta title="Home" />
      <Paper
        elevation={2}
        sx={{ m: 4, p: 4 }}
      >
        <Typography variant="h1">{t('title')}</Typography>
        <Typography variant="body2">{t('description')}</Typography>
      </Paper>
    </>
  );
};
