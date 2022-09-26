import type { NormalizedEventDTO } from '../../../types/dto';
import { api } from '../api';
import type { GetEventsResponseData } from './types';

const eventsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.query<NormalizedEventDTO[], void>({
      query: () => 'event/upcoming',
      transformResponse: (data: GetEventsResponseData) =>
        data.results.map((event) => ({
          id: event.id,
          name: event.name,
          image: event.feature_image,
          date: event.date,
        })),
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;
