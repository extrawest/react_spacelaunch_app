import { useParams } from 'react-router-dom';

import { Meta } from '../../components/ui';

export const LaunchContainer = () => {
  const { id } = useParams();

  return <Meta title={id ? id : 'Launch'} />;
};
