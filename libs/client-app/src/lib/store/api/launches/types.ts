import type { LaunchDTO } from '../../../types/dto';

export interface GetLaunchesTransformedData {
  total: number;
  page?: number;
  data: LaunchDTO[];
}

export interface GetLaunchesResponseData {
  count: number;
  next: string | null;
  previous: string | null;
  results: LaunchDTO[];
}
