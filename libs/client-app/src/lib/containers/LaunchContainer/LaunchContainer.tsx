import { Navigate, useParams } from 'react-router-dom';

import { Spinner } from '../../components/common';
import { LaunchIntro } from '../../components/intros';
import {
  LaunchInfo,
  MetaData,
  RocketInfo,
  Map,
  YouTubeVideo,
} from '../../components/ui';
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

  const videoUrl = data.vidURLs[0];

  return (
    <>
      <MetaData title={data.name} />
      <PageLayout
        hasBackHome
        intro={<LaunchIntro launch={data} />}
      >
        {videoUrl && <YouTubeVideo url={videoUrl} />}
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
