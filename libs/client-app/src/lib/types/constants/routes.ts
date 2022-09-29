import type { EventDTO, LaunchDTO, RocketDTO } from '../dto';

export const RoutesObj = {
  Home: '/',
  Launch: (id?: LaunchDTO['id']) => `/launch${id ? `/${id}` : ''}`,
  Rocket: (id?: RocketDTO['id']) => `/rocket${id ? `/${id}` : ''}`,
  Event: (id?: EventDTO['id']) => `/event${id ? `/${id}` : ''}`,
  NotFound: '/404',
};
