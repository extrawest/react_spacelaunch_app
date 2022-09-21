import { useTranslation } from 'react-i18next';

import { Stack, Typography } from '@mui/material';

import { NamespacesEnum } from '@vladyslav.haiduk_react/client-app';

const HomePage = () => {
  const { t } = useTranslation([NamespacesEnum.Home]);

  return (
    <Stack>
      <Typography variant="h1">{t('title')}</Typography>
      <Typography variant="body2">{t('description')}</Typography>
    </Stack>
  );
};

export default HomePage;
