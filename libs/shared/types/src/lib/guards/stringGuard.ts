export const stringGuard = (param: unknown): param is string => {
  return typeof param === 'string';
};
