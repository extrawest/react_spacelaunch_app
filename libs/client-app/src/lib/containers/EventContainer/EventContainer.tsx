import { useParams } from 'react-router-dom';

import { Meta } from '../../components/ui';

export const EventContainer = () => {
  const { id } = useParams();

  return <Meta title={id ? id.toString() : 'Event'} />;
};
