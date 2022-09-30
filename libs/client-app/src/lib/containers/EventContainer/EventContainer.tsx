import { useTranslation } from 'react-i18next';
import { Navigate, useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import { Spinner } from '../../components/common';
import { EventIntro } from '../../components/intros';
import { MetaData, YouTubeVideo } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetEventByIdQuery } from '../../store';
import { RoutesObj } from '../../types/constants';
import { NamespacesEnum } from '../../types/enums';
import type { ParamsData } from './EventContainer.types';

export const EventContainer = () => {
  const { id } = useParams<ParamsData>();
  const { data, isLoading, isError } = useGetEventByIdQuery(Number(id));

  const { t } = useTranslation([NamespacesEnum.Event]);

  if (isLoading) {
    return <Spinner variant="fixed" />;
  }

  if (isError || !data) {
    return <Navigate to={RoutesObj.NotFound} />;
  }

  return (
    <>
      <MetaData title={data.name} />
      <PageLayout
        hasBackHome
        intro={<EventIntro event={data} />}
      >
        {data.video_url && <YouTubeVideo url={data.video_url} />}
        <Typography variant="h2">{t('event:related_info_title')}</Typography>
      </PageLayout>
    </>
  );
};
