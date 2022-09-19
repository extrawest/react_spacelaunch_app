import type { FC, PropsWithChildren } from 'react';

import { RouterProvider } from './RouterProvider';
import { ThemeProvider } from './ThemeProvider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RouterProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </RouterProvider>
  );
};
