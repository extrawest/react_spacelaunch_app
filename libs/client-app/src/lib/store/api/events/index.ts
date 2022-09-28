import type { EventDTO } from '../../../types/dto';
import { api } from '../api';
import type { GetEventsResponseData } from './types';

const eventsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.query<EventDTO[], void>({
      query: () => 'event/upcoming',
      transformResponse: (data: GetEventsResponseData) => data.results,
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;
