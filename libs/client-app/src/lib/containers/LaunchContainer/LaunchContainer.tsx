import { useTranslation } from 'react-i18next';
import { Navigate, useParams } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';

import { CustomButton, Spinner } from '../../components/common';
import { LaunchIntro } from '../../components/intros';
import { Meta } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetLaunchByIdQuery } from '../../store';
import { RoutesObj } from '../../types/constants';
import { NamespacesEnum } from '../../types/enums';
import type { ParamsData } from './LaunchContainer.types';

export const LaunchContainer = () => {
  const { id } = useParams<ParamsData>();
  const { data, isLoading, isError } = useGetLaunchByIdQuery(id ?? '');

  const { t } = useTranslation([NamespacesEnum.Launch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !data) {
    return <Navigate to={RoutesObj.NotFound} />;
  }

  return (
    <>
      <Meta title={data.name} />
      <PageLayout
        hasBackHome
        intro={<LaunchIntro launch={data} />}
      >
        <Stack sx={{ alignItems: 'center', textAlign: 'center' }}>
          <Typography variant="h2">Overview</Typography>
        </Stack>

        <Stack sx={{ alignItems: 'center', textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{ mb: 2.5 }}
          >
            {data.rocket.configuration.full_name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 3.75 }}
          >
            {data.rocket.configuration.description}
          </Typography>
          <CustomButton>{t('launch:open_rocket_details')}</CustomButton>
        </Stack>
      </PageLayout>
    </>
  );
};
