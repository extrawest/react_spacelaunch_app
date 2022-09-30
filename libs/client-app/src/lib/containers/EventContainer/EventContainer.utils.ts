import type { EventDTO } from '../../types/dto';

export const getOtherEvent = (events?: EventDTO[], currentEvent?: EventDTO) => {
  return (
    events &&
    currentEvent &&
    events.filter((event) => event.id !== currentEvent.id)
  );
};
