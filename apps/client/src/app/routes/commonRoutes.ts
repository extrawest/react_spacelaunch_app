import { lazy } from 'react';

import type { RouteParams } from '@vladyslav.haiduk_react/client-app';
import { RoutesObj } from '@vladyslav.haiduk_react/client-app';

const HomePage = lazy(() => import('../pages/Home/Home'));
const LaunchPage = lazy(() => import('../pages/Launch/Launch'));
const RocketPage = lazy(() => import('../pages/Rocket/Rocket'));
const EventPage = lazy(() => import('../pages/Event/Event'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

export const commonRoutes: RouteParams[] = [
  {
    path: RoutesObj.Home,
    element: HomePage,
  },
  {
    path: `${RoutesObj.Launch()}/:id`,
    element: LaunchPage,
  },
  {
    path: `${RoutesObj.Rocket()}/:id`,
    element: RocketPage,
  },
  {
    path: `${RoutesObj.Event()}/:id`,
    element: EventPage,
  },
  {
    path: RoutesObj.NotFound,
    element: NotFoundPage,
  },
];
