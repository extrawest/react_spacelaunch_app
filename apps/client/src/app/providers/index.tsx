import type { FC, PropsWithChildren } from 'react';

import { RouterProvider } from './RouterProvider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <RouterProvider>{children}</RouterProvider>;
};
