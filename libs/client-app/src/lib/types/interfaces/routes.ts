import type { LazyExoticComponent } from 'react';

export interface RouteParams {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
}
