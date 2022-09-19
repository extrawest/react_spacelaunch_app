import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { RoutesEnum } from '@vladyslav.haiduk_react/client-app';

import { commonRoutes } from './commonRoutes';

export const Routing = () => {
  const routes = [...commonRoutes];

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
          element={<Navigate to={RoutesEnum.NotFound} />}
        />
      </Routes>
    </Suspense>
  );
};
