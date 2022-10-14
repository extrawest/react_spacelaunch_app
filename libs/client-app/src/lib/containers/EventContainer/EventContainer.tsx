import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useParams } from 'react-router-dom';

import { Spinner } from '../../components/common';
import { EventIntro } from '../../components/intros';
import {
  EventsCarousel,
  MetaData,
  RelatedEventInfo,
  YouTubeVideo,
} from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetEventByIdQuery, useGetEventsQuery } from '../../store';
import { RoutesObj } from '../../types/constants';
import { NamespacesEnum } from '../../types/enums';
import type { ParamsData } from './EventContainer.types';
import { getOtherEvent } from './EventContainer.utils';

export const EventContainer = () => {
  const { id } = useParams<ParamsData>();
  const { data, isFetching, isError } = useGetEventByIdQuery(Number(id));
  const { data: events, isLoading: isEventsLoading } = useGetEventsQuery();

  const { t } = useTranslation([NamespacesEnum.Event]);

  const otherEvents = useMemo(
    () => getOtherEvent(events, data),
    [events, data]
  );

  if (isFetching) {
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
        {data.launches?.[0] && <RelatedEventInfo launch={data.launches[0]} />}
        <EventsCarousel
          title={t('event:other_events_title')}
          events={otherEvents}
          loading={isEventsLoading}
        />
      </PageLayout>
    </>
  );
};
