import type { ArrayElement } from '@vladyslav.haiduk_react/shared/types';

import type { EventDTO } from '../../../types/dto';

export interface RelatedEventInfoProps {
  launch: ArrayElement<EventDTO['launches']>;
}
