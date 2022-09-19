import type { LazyExoticComponent } from 'react';

import type { RoutesEnum } from '../enums';

export interface RouteParams {
  path: RoutesEnum;
  element: LazyExoticComponent<() => JSX.Element>;
}
