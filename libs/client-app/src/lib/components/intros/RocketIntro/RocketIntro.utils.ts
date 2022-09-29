import dayjs from 'dayjs';

import type { RocketDTO } from '../../../types/dto';

export const formatMaidenFlightDate = (date: RocketDTO['maiden_flight']) => {
  return dayjs(date).format('MMM D, YYYY');
};
