import type { FC } from 'react';
import { Helmet } from 'react-helmet';

import type { MetaProps } from './Meta.types';

export const Meta: FC<MetaProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Spacelaunch</title>
    </Helmet>
  );
};
