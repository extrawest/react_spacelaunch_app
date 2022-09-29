export const stringGuard = (prop: unknown): prop is string => {
  return typeof prop === 'string';
};
