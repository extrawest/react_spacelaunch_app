import { HomeIntroContent } from '../../components/intros';
import { Meta } from '../../components/ui';
import { PageLayout } from '../../layouts';
import { useGetEventsQuery, useGetLaunchesQuery } from '../../store';

export const HomeContainer = () => {
  const { data: events } = useGetEventsQuery();
  const { data: launches } = useGetLaunchesQuery();

  console.log('events:', events);
  console.log('launches:', launches);

  return (
    <>
      <Meta title="Home" />
      <PageLayout introChildren={<HomeIntroContent />}></PageLayout>
    </>
  );
};
