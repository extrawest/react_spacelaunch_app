import type { NormalizedEventDTO, NormalizedLaunchDTO } from '../dto';

export const RoutesObj = {
  Home: '/',
  Launch: (id?: NormalizedLaunchDTO['id']) => `/launch${id ? `/${id}` : ''}`,
  Rocket: (id?: string) => `/rocket${id ? `/${id}` : ''}`,
  Event: (id?: NormalizedEventDTO['id']) => `/event${id ? `/${id}` : ''}`,
  NotFound: '/404',
};
