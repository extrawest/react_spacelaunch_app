import { useTranslation } from 'react-i18next';

import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material';

import { EmptyImage } from '../../assets/images';
import { HomeIntroContent } from '../../components/intros';
import { Meta } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetEventsQuery, useGetLaunchesQuery } from '../../store';
import { NamespacesEnum } from '../../types/enums';

export const HomeContainer = () => {
  const { data: events } = useGetEventsQuery();
  const { data: launches } = useGetLaunchesQuery();

  const { t } = useTranslation([NamespacesEnum.Home]);

  return (
    <>
      <Meta title="Home" />
      <PageLayout introChildren={<HomeIntroContent />}>
        <Stack spacing={5}>
          <Typography variant="h2">{t('home:events_title')}</Typography>
          <Stack
            direction="row"
            spacing={2.5}
            sx={{ overflowX: 'scroll' }}
          >
            {events?.map((event) => (
              <Card
                key={event.id}
                sx={{ minWidth: 380 }}
              >
                <CardMedia
                  component="img"
                  height={264}
                  image={event.image ?? EmptyImage}
                />
                <CardContent>
                  <Chip label={event.date.toString()} />
                  <Typography variant="subtitle1">{event.name}</Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Stack>

        <Stack spacing={5}>
          <Typography variant="h2">{t('home:launches_title')}</Typography>
          <Stack
            direction="row"
            spacing={2.5}
            sx={{ flexWrap: 'wrap', gapY: 2.5 }}
          >
            {launches?.map((launch) => (
              <Card
                key={launch.id}
                sx={{ minWidth: '50% - 20px' }}
              >
                <CardMedia
                  component="img"
                  height={264}
                  image={launch.image ?? EmptyImage}
                />
                <CardContent>
                  <Chip label={launch.date.toString()} />
                  <Typography variant="subtitle1">{launch.name}</Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Stack>
      </PageLayout>
    </>
  );
};
