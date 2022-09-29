import { Navigate, useParams } from 'react-router-dom';

import { ChipsList, Spinner } from '../../components/common';
import { RocketIntro } from '../../components/intros';
import { MetaData } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetRocketByIdQuery } from '../../store';
import { RoutesObj } from '../../types/constants';
import type { ParamsData } from './RocketContainer.types';

export const RocketContainer = () => {
  const { id } = useParams<ParamsData>();
  const { data, isLoading, isError } = useGetRocketByIdQuery(Number(id ?? ''));

  if (isLoading) {
    return <Spinner variant="fixed" />;
  }

  if (isError || !data) {
    return <Navigate to={RoutesObj.NotFound} />;
  }

  return (
    <>
      <MetaData title="Rocket" />
      <PageLayout
        hasBackHome
        intro={<RocketIntro rocket={data} />}
      >
        <ChipsList
          chips={[{ label: 'Hello' }, { label: 'Bye' }, { label: '!' }]}
        />
      </PageLayout>
    </>
  );
};
