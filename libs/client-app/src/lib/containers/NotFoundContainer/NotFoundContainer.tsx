import { NotFoundIntro } from '../../components/intros/NotFoundIntro/NotFoundIntro';
import { MetaData } from '../../components/ui';
import { PageLayout } from '../../layouts';

export const NotFoundContainer = () => {
  return (
    <>
      <MetaData title="Not Found" />
      <PageLayout
        hasBackHome
        intro={<NotFoundIntro />}
      />
    </>
  );
};
