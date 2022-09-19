import { lazy } from 'react';

import type { RouteParams } from '@vladyslav.haiduk_react/client-app';
import { RoutesEnum } from '@vladyslav.haiduk_react/client-app';

const MainPage = lazy(() => import('../pages/Main/Main'));
const LaunchPage = lazy(() => import('../pages/Launch/Launch'));
const RocketPage = lazy(() => import('../pages/Rocket/Rocket'));
const EventPage = lazy(() => import('../pages/Event/Event'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

export const commonRoutes: RouteParams[] = [
  {
    path: RoutesEnum.Main,
    element: MainPage,
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
