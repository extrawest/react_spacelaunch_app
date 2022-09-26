import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import { Meta } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetEventsQuery, useGetLaunchesQuery } from '../../store';
import { NamespacesEnum } from '../../types/enums';

export const HomeContainer = () => {
  const { data: events } = useGetEventsQuery();
  const { data: launches } = useGetLaunchesQuery();

  const { t } = useTranslation([NamespacesEnum.Home]);

  console.log('events:', events);
  console.log('launches:', launches);

  return (
    <>
      <Meta title="Home" />
      <PageLayout hasBackHome>
        <Typography variant="h1">{t('title')}</Typography>
        <Typography variant="body2">{t('description')}</Typography>
      </PageLayout>
    </>
  );
};
