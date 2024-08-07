import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// import Loading from "components/common/loading";
import AuthRoute from "./AuthRoute";
import { Loading } from "../components/Loading/Loading";

// import AuthRoute from "./AuthRoute";

type RouteType = {
  id: string;
  path?: string;
  component: React.ElementType;
  isRequired?: boolean;
};

function renderRoute(route: RouteType) {
  const { component: Component } = route;

  if (route.isRequired) {
    return (
      <Route
        key={route.id}
        path={route.path}
        element={
          <AuthRoute route={route}>
            <Component />
          </AuthRoute>
        }
      />
    );
  }

  return (
    <Route
      key={route.id}
      path={route.path}
      element={
        <Component />
      }
    />
  );
}

export function renderRoutes(routes: RouteType[] = []) {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map((route) => {
          return renderRoute(route);
        })}
      </Routes>
    </Suspense>
  );
}
