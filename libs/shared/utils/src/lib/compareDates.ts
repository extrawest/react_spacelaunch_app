import dayjs from 'dayjs';

export const compareDates = (date1: Date, date2: Date) => {
  const totalSeconds = dayjs(date1).diff(date2, 'second');
  const totalMinutes = totalSeconds / 60;
  const totalHours = totalMinutes / 60;
  const totalDays = totalHours / 24;

  const days = Math.floor(totalDays);
  const hours = Math.floor(totalHours - days * 24);
  const minutes = Math.floor(totalMinutes - days * 24 * 60 - hours * 60);
  const seconds = Math.floor(
    totalSeconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60
  );

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
