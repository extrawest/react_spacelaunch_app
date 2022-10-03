/**
 * Get a parameter value from an url
 * @param {string} url - url in which to search
 * @param {string} param - key of parameter to search
 * @returns {string|null} value of the parameter in the url
 */
export const getUrlSearchParam = (
  url: string,
  param: string
): string | null => {
  const searchParams = new URLSearchParams(url.split('?')[1]);
  return searchParams.get(param);
};
