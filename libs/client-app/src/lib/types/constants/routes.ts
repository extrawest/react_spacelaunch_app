import type { EventDTO, LaunchDTO } from '../dto';

export const RoutesObj = {
  Home: '/',
  Launch: (id?: LaunchDTO['id']) => `/launch${id ? `/${id}` : ''}`,
  // Todo: replace with RocketDTO['id']
  Rocket: (id?: number) => `/rocket${id ? `/${id}` : ''}`,
  Event: (id?: EventDTO['id']) => `/event${id ? `/${id}` : ''}`,
  NotFound: '/404',
};
