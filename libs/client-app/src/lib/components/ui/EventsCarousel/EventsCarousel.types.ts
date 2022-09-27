import type { NormalizedEventDTO } from '../../../types/dto';

export interface EventsCarouselProps {
  title: string;
  events?: NormalizedEventDTO[];
  loading?: boolean;
}
