import { useTranslation } from 'react-i18next';

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import { EmptyImage } from '../../assets/images';
import { CustomChip } from '../../components/common';
import { HomeIntroContent } from '../../components/intros';
import { EventsCarousel, Meta } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetEventsQuery, useGetLaunchesQuery } from '../../store';
import { NamespacesEnum } from '../../types/enums';
import { formatDate } from '../../utils';

export const HomeContainer = () => {
  const { data: events, isLoading: isEventsLoading } = useGetEventsQuery();
  const { data: launches } = useGetLaunchesQuery();

  const { t } = useTranslation([NamespacesEnum.Home]);

  return (
    <>
      <Meta title="Home" />
      <PageLayout introChildren={<HomeIntroContent />}>
        <EventsCarousel
          title={t('home:events_title')}
          events={events}
          loading={isEventsLoading}
        />

        <Stack spacing={5}>
          <Typography variant="h2">{t('home:launches_title')}</Typography>
          <Grid
            container
            spacing={2}
          >
            {launches?.map((launch) => (
              <Grid
                key={launch.id}
                item
                lg={6}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height={264}
                    image={launch.image ?? EmptyImage}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <CustomChip
                      label={formatDate(launch.date)}
                      gradient
                    />
                    <Typography variant="subtitle1">{launch.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </PageLayout>
    </>
  );
};
