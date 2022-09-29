export const undefinedGuard = (param: unknown): param is undefined => {
  return typeof param === 'undefined';
};
