import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

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
  const launchesBoxRef = useRef<HTMLDivElement>(null);

  const handleScrollToLaunches = useCallback(() => {
    const { current } = launchesBoxRef;

    if (current) {
      window.scroll({ top: current.offsetTop - 180, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <MetaData title="Home" />
      <PageLayout intro={<HomeIntro onShowLaunches={handleScrollToLaunches} />}>
        <EventsCarousel
          title={t('home:events_title')}
          events={events}
          loading={isEventsLoading}
        />
        <Box ref={launchesBoxRef}>
          <LaunchesList
            title={t('home:launches_title')}
            launches={launches}
            loading={isLaunchesLoading}
          />
        </Box>
      </PageLayout>
    </>
  );
};
