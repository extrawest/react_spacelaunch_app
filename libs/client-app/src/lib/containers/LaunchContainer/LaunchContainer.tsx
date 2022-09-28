import { Navigate, useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import { LaunchIntro } from '../../components/intros';
import { Meta } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetLaunchByIdQuery } from '../../store';
import { RoutesObj } from '../../types/constants';
import type { ParamsData } from './LaunchContainer.types';

export const LaunchContainer = () => {
  const { id } = useParams<ParamsData>();
  const { data, isLoading, isError } = useGetLaunchByIdQuery(id ?? '');

  if (!isLoading && isError) {
    return <Navigate to={RoutesObj.NotFound} />;
  }

  if (!data) {
    return <Typography>Loading data...</Typography>;
  }

  return (
    <>
      <Meta title={data?.name ?? 'Launch'} />
      <PageLayout
        hasBackHome
        intro={<LaunchIntro launch={data} />}
      >
        {data?.name}
      </PageLayout>
    </>
  );
};
