import dayjs from 'dayjs';

/**
 * Format a date
 * @param {Date} date - date to format
 * @returns {string} formatted date
 */
export const formatDate = (date: Date) => {
  return dayjs(date).format('MMM. D, YYYY, h:mm a');
};
