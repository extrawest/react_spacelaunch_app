export const boolGuard = (param: unknown): param is boolean => {
  return typeof param === 'boolean';
};
