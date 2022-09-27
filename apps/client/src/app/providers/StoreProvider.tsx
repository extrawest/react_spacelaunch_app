import type { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { store } from '@vladyslav.haiduk_react/client-app';

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
