import type { LaunchDTO } from '../../../types/dto';
import { api } from '../api';
import type { GetLaunchesResponseData } from './types';

const launchesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLaunches: build.query<LaunchDTO[], void>({
      query: () => 'launch/upcoming?mode=detailed',
      transformResponse: (data: GetLaunchesResponseData) => data.results,
    }),
    getLaunchById: build.query<LaunchDTO, LaunchDTO['id']>({
      query: (id) => `launch/${id}`,
    }),
  }),
});

export const { useGetLaunchesQuery, useGetLaunchByIdQuery } = launchesApi;
