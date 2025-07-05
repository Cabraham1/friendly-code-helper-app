import { lazy, ComponentType } from "react";
import NotFound from "@/pages/NotFound";

const Home = lazy(() => import("@/pages/Home"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const LiveData = lazy(() => import("@/pages/LiveData"));
const Learn = lazy(() => import("@/pages/Learn"));

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
    path: "/about-us",
    element: AboutUs,
  },
  {
    path: "/live-data",
    element: LiveData,
  },
  {
    path: "/learn",
    element: Learn,
  },
  {
    path: "*",
    element: NotFound,
  },
];
