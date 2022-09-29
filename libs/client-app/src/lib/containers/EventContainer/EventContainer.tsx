import { useParams } from 'react-router-dom';

import { MetaData } from '../../components/ui';

export const EventContainer = () => {
  const { id } = useParams();

  return <MetaData title={id ? id.toString() : 'Event'} />;
};
