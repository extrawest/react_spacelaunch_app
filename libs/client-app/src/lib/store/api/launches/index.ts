import { useCallback, useEffect, useMemo, useState } from 'react';

import { getUrlSearchParam } from '@vladyslav.haiduk_react/shared/utils';

import type { LaunchDTO } from '../../../types/dto';
import { api } from '../api';
import type {
  GetLaunchesTransformedData,
  GetLaunchesResponseData,
} from './types';

const SIZE = 10;

const launchesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLaunches: build.query<GetLaunchesTransformedData, { page: number }>({
      query: ({ page }) => {
        const offset = page * SIZE;
        return `launch/upcoming?limit=${SIZE}&mode=detailed&offset=${offset}`;
      },
      transformResponse: (data: GetLaunchesResponseData) => ({
        total: data.count,
        page: data.next
          ? Math.round(
              Number(getUrlSearchParam(data.next, 'offset')) / SIZE - 1
            )
          : undefined,
        data: data.results,
      }),
    }),
    getLaunchById: build.query<LaunchDTO, LaunchDTO['id']>({
      query: (id) => `launch/${id}`,
    }),
  }),
});

const { useGetLaunchesQuery } = launchesApi;

export const useGetInfiniteLaunchesQuery = () => {
  const [localPage, setLocalPage] = useState(1);
  const [combinedData, setCombinedData] = useState<LaunchDTO[]>([]);
  const { data, isLoading, isFetching } = useGetLaunchesQuery({
    page: localPage,
  });

  const {
    total = 0,
    page: remotePage = 1,
    data: fetchedData = [],
  } = data ?? {};

  useEffect(() => {
    if (fetchedData.length > 0) {
      setCombinedData((prev) => [...prev, ...fetchedData]);
    }
  }, [fetchedData]);

  const maxPages = useMemo(() => {
    return Math.ceil(total / SIZE);
  }, [total]);

  const refresh = useCallback(() => {
    setLocalPage(1);
  }, []);

  const fetchMore = () => {
    if (localPage < maxPages && localPage === remotePage) {
      setLocalPage((page) => page + 1);
    }
  };

  return {
    combinedData,
    localPage,
    isLoading,
    isFetching,
    total,
    refresh,
    fetchMore,
  };
};

export const { useGetLaunchByIdQuery } = launchesApi;
