import dayjs from 'dayjs';

export const formatDate = (date: Date) => {
  return dayjs(date).format('MMM. D, YYYY, h:mm a');
};
