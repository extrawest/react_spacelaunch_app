export const getUrlSearchParam = (url: string, param: string) => {
  const searchParams = new URLSearchParams(url.split('?')[1]);
  return searchParams.get(param);
};
