import type { EventDTO } from '../../../types/dto';

export interface GetEventsResponseData {
  count: number;
  next: string | null;
  previous: string | null;
  results: EventDTO[];
}
