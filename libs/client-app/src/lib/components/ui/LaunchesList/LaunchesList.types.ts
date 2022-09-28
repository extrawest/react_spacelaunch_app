import type { LaunchDTO } from '../../../types/dto';

export interface LaunchesListProps {
  title: string;
  launches?: LaunchDTO[];
  loading: boolean;
}
