import type { LaunchDTO } from '../../../types/dto';

export interface GetLaunchesResponseData {
  count: number;
  next: string | null;
  previous: string | null;
  results: LaunchDTO[];
}
