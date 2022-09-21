import { lazy } from 'react';

import type { RouteParams } from '@vladyslav.haiduk_react/client-app';
import { RoutesEnum } from '@vladyslav.haiduk_react/client-app';

const HomePage = lazy(() => import('../pages/Home/Home'));
const LaunchPage = lazy(() => import('../pages/Launch/Launch'));
const RocketPage = lazy(() => import('../pages/Rocket/Rocket'));
const EventPage = lazy(() => import('../pages/Event/Event'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

export const commonRoutes: RouteParams[] = [
  {
    path: RoutesEnum.Home,
    element: HomePage,
  },
  {
    path: RoutesEnum.Launch,
    element: LaunchPage,
  },
  {
    path: RoutesEnum.Rocket,
    element: RocketPage,
  },
  {
    path: RoutesEnum.Event,
    element: EventPage,
  },
  {
    path: RoutesEnum.NotFound,
    element: NotFoundPage,
  },
];
