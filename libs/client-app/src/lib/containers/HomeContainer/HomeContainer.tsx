import { useTranslation } from 'react-i18next';

import { HomeIntro } from '../../components/intros';
import { EventsCarousel, LaunchesList, MetaData } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetEventsQuery, useGetLaunchesQuery } from '../../store';
import { NamespacesEnum } from '../../types/enums';

export const HomeContainer = () => {
  const { data: events, isLoading: isEventsLoading } = useGetEventsQuery();
  const { data: launches, isLoading: isLaunchesLoading } =
    useGetLaunchesQuery();

  const { t } = useTranslation([NamespacesEnum.Home]);

  return (
    <>
      <MetaData title="Home" />
      <PageLayout intro={<HomeIntro />}>
        <EventsCarousel
          title={t('home:events_title')}
          events={events}
          loading={isEventsLoading}
        />
        <LaunchesList
          title={t('home:launches_title')}
          launches={launches}
          loading={isLaunchesLoading}
        />
      </PageLayout>
    </>
  );
};
