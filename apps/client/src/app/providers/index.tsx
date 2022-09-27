import type { FC, PropsWithChildren } from 'react';

import { RouterProvider } from './RouterProvider';
import { StoreProvider } from './StoreProvider';
import { ThemeProvider } from './ThemeProvider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RouterProvider>
      <StoreProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </StoreProvider>
    </RouterProvider>
  );
};
