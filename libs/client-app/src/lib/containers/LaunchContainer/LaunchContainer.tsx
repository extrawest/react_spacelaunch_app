import { Navigate, useParams } from 'react-router-dom';

import { getUrlSearchParam } from '@vladyslav.haiduk_react/shared/utils';

import { Map, Spinner, YouTubeVideo } from '../../components/common';
import { LaunchIntro } from '../../components/intros';
import { LaunchInfo, MetaData, RocketInfo } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetLaunchByIdQuery } from '../../store';
import { RoutesObj } from '../../types/constants';
import type { ParamsData } from './LaunchContainer.types';

export const LaunchContainer = () => {
  const { id } = useParams<ParamsData>();
  const { data, isLoading, isError } = useGetLaunchByIdQuery(id ?? '');

  if (isLoading) {
    return <Spinner variant="fixed" />;
  }

  if (isError || !data) {
    return <Navigate to={RoutesObj.NotFound} />;
  }

  const videoId =
    data.vidURLs.length > 0 ? getUrlSearchParam(data.vidURLs[0], 'v') : null;

  return (
    <>
      <MetaData title={data.name} />
      <PageLayout
        hasBackHome
        intro={<LaunchIntro launch={data} />}
      >
        {videoId && <YouTubeVideo videoId={videoId} />}
        <LaunchInfo launch={data} />
        <RocketInfo rocket={data.rocket.configuration} />
        <Map
          lat={Number(data.pad.latitude)}
          lng={Number(data.pad.longitude)}
        />
      </PageLayout>
    </>
  );
};
