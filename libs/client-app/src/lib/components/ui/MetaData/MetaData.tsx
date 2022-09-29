import type { FC } from 'react';
import { Helmet } from 'react-helmet';

import type { MetaDataProps } from './MetaData.types';

export const MetaData: FC<MetaDataProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Spacelaunch</title>
    </Helmet>
  );
};
