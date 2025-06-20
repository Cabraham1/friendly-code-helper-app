import { lazy, ComponentType } from "react";
import NotFound from "@/pages/NotFound";

const Home = lazy(() => import("@/pages/Home"));
const Dummy = lazy(() => import("@/pages/Dummy"));

interface RouteConfig {
  path: string;
  element: React.LazyExoticComponent<ComponentType> | ComponentType;
  children?: RouteConfig[];
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/dummy",
    element: Dummy,
  },
  {
    path: "*",
    element: NotFound,
  },
];
