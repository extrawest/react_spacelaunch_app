import { ChipsList } from '../../components/common';
import { RocketIntro } from '../../components/intros';
import { MetaData } from '../../components/ui';
import { PageLayout } from '../../layouts';

export const RocketContainer = () => {
  return (
    <>
      <MetaData title="Rocket" />
      <PageLayout
        hasBackHome
        intro={<RocketIntro />}
      >
        <ChipsList
          chips={[{ label: 'Hello' }, { label: 'Bye' }, { label: '!' }]}
        />
      </PageLayout>
    </>
  );
};
