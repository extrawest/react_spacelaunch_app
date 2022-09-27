import type { NormalizedLaunchDTO } from '../../../types/dto';

export interface LaunchesListProps {
  title: string;
  launches?: NormalizedLaunchDTO[];
  loading: boolean;
}
