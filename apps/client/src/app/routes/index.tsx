import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { RoutesObj, Spinner } from '@vladyslav.haiduk_react/client-app';
import { useResetPageScroll } from '@vladyslav.haiduk_react/shared/hooks';

import { commonRoutes } from './commonRoutes';

export const Routing = () => {
  useResetPageScroll();

  const routes = [...commonRoutes];

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route
          path="*"
          element={<Navigate to={RoutesObj.NotFound} />}
        />
      </Routes>
    </Suspense>
  );
};
