import type { EventDTO } from '../../../types/dto';

export interface EventsCarouselProps {
  title: string;
  events?: EventDTO[];
  loading: boolean;
}

export interface NavStylesOptions {
  hidden: boolean;
}
