import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { ROUTE_NAMES } from "utils/constants/routeNames.constant";

const { DEVICE } = ROUTE_NAMES;

export const adminRoutes = [
  {
    id: "home",
    path: "/",
    component: lazy(() => import("../pages/home/HomeComponent")),
  },
  {
    id: "personal-information",
    path: "/profile",
    component: lazy(() => import("../pages/user/personal-information/personal-information")),
  },
  {
    id: "list-users",
    path: "/users",
    component: lazy(() => import("../pages/user/list-users/ListUsersPage")),
  },
  {
    id: "private-routes",
    path: "*",
    component: () => <Navigate to="/" />,
  },
];

export const publicRoutes = [
  {
    id: "login",
    path: "/login",
    component: lazy(() => import("../pages/auth/login")),
  },
  {
    id: "public-routes",
    path: "*",
    component: () => <Navigate to="/login" />,
  },
];
