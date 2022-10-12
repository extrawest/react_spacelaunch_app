import { Navigate, useParams } from 'react-router-dom';

import { Spinner } from '../../components/common';
import { LaunchIntro } from '../../components/intros';
import {
  LaunchOverview,
  MetaData,
  RocketOverview,
  Map,
  YouTubeVideo,
} from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetLaunchByIdQuery } from '../../store';
import { RoutesObj } from '../../types/constants';
import type { ParamsData } from './LaunchContainer.types';

export const LaunchContainer = () => {
  const { id } = useParams<ParamsData>();
  const { data, isFetching, isError } = useGetLaunchByIdQuery(id ?? '');

  if (isFetching) {
    return <Spinner variant="fixed" />;
  }

  if (isError || !data) {
    return <Navigate to={RoutesObj.NotFound} />;
  }

  const videoUrl = data.vidURLs?.[0];

  return (
    <>
      <MetaData title={data.name} />
      <PageLayout
        hasBackHome
        intro={<LaunchIntro launch={data} />}
      >
        {videoUrl && <YouTubeVideo url={videoUrl} />}
        <LaunchOverview launch={data} />
        {data.rocket?.configuration && (
          <RocketOverview rocket={data.rocket.configuration} />
        )}
        {data.pad?.latitude && data.pad?.longitude && (
          <Map
            lat={Number(data.pad.latitude)}
            lng={Number(data.pad.longitude)}
          />
        )}
      </PageLayout>
    </>
  );
};
