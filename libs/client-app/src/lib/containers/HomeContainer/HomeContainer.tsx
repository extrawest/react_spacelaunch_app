import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Box } from '@mui/material';

import { Loader } from '../../components/common';
import { HomeIntro } from '../../components/intros';
import { EventsCarousel, LaunchesList, MetaData } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetEventsQuery, useGetInfiniteLaunchesQuery } from '../../store';
import { NamespacesEnum } from '../../types/enums';

export const HomeContainer = () => {
  const { data: events, isLoading: isEventsLoading } = useGetEventsQuery();
  const {
    combinedData: launches,
    isLoading: isLaunchesLoading,
    total,
    fetchMore,
  } = useGetInfiniteLaunchesQuery();

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
          <InfiniteScroll
            dataLength={launches.length}
            next={fetchMore}
            hasMore={total > launches.length}
            loader={
              <Loader
                label="Load More"
                mt={6.25}
              />
            }
          >
            <LaunchesList
              title={t('home:launches_title')}
              launches={launches}
              loading={isLaunchesLoading}
            />
          </InfiniteScroll>
        </Box>
      </PageLayout>
    </>
  );
};
