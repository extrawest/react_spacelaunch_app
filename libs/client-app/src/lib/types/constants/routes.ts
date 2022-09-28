import type { EventDTO, LaunchDTO } from '../dto';

export const RoutesObj = {
  Home: '/',
  Launch: (id?: LaunchDTO['id']) => `/launch${id ? `/${id}` : ''}`,
  Rocket: (id?: string) => `/rocket${id ? `/${id}` : ''}`,
  Event: (id?: EventDTO['id']) => `/event${id ? `/${id}` : ''}`,
  NotFound: '/404',
};
