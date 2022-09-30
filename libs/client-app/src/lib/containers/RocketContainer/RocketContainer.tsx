import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { ChipsList, Spinner } from '../../components/common';
import { RocketIntro } from '../../components/intros';
import { MetaData, RocketDetails } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetRocketByIdQuery } from '../../store';
import { RoutesObj } from '../../types/constants';
import type { ParamsData } from './RocketContainer.types';
import { getRocketChips } from './RocketContainer.utils';

export const RocketContainer = () => {
  const { id } = useParams<ParamsData>();
  const { data, isLoading, isError } = useGetRocketByIdQuery(Number(id));

  const chips = useMemo(() => (data ? getRocketChips(data) : null), [data]);

  if (isLoading) {
    return <Spinner variant="fixed" />;
  }

  if (isError || !data) {
    return <Navigate to={RoutesObj.NotFound} />;
  }

  return (
    <>
      <MetaData title={data.full_name} />
      <PageLayout
        hasBackHome
        intro={<RocketIntro rocket={data} />}
      >
        {chips && (
          <ChipsList
            chips={chips}
            gap={3.75}
          />
        )}
        <RocketDetails rocket={data} />
      </PageLayout>
    </>
  );
};
