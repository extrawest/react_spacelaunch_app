import type { NormalizedLaunchDTO } from '../../../types/dto';
import { api } from '../api';
import type { GetLaunchesResponseData } from './types';

const launchesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLaunches: build.query<NormalizedLaunchDTO[], void>({
      query: () => 'launch/upcoming?mode=detailed',
      transformResponse: (data: GetLaunchesResponseData) =>
        data.results.map((launch) => ({
          id: launch.id,
          name: launch.name,
          image: launch.image_url,
          date: launch.window_start,
        })),
    }),
  }),
});

export const { useGetLaunchesQuery } = launchesApi;
