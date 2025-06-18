import { lazy, Suspense, ComponentType } from "react";
import NotFound from "@/pages/NotFound";

const Home = lazy(() => import("@/pages/Home"));

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
    path: "*",
    element: NotFound,
  },
];

// Helper function to handle lazy loading
export const withSuspense = (
  Component: ComponentType | React.LazyExoticComponent<ComponentType>
) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};
