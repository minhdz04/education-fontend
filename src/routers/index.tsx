import { Skeleton, Spin } from "antd";
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

//Loading Component

const LoadingIndicator = () => (
  <div className="flex justify-center items-center h-screen text-center">
    <div className="flex flex-col items-center space-y-4">
      <Spin size="large" />
      <p className="text-lg font-medium text-gray-700">
        Loading
        <span className="relative">
          <span className=" animate-dots-blinking">.</span>
          <span className=" animate-dots-blinking animation-delay-200">.</span>
          <span className=" animate-dots-blinking animation-delay-400">.</span>
        </span>
      </p>
    </div>
  </div>
);

const LoadingSkeleton = () => (
  <div className="flex justify-center items-center h-screen text-center">
    <Skeleton active />
  </div>
);

// Lazy load các trang
const AuthPage = lazy(() => import("../pages/auth"));
const DashBoardPage = lazy(() => import("../pages/dashboard"));
const ErrorPage = lazy(() => import("../pages/errors"));
const MainPage = lazy(() => import("../pages"));
const AiEmployeePage = lazy(() => import("../pages/aiEmployee"));

function MainRoutes() {
  const routes = useRoutes([
    {
      path: "/auth",
      element: (
        <Suspense fallback={<LoadingIndicator />}>
          <AuthPage />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: (
        <Suspense fallback={<LoadingIndicator />}>
          <MainPage auth={true} />
        </Suspense>
      ),
      children: [
        {
          path: "ai-employee",
          element: (
            <Suspense fallback={<LoadingSkeleton />}>
              <AiEmployeePage />
            </Suspense>
          ),
        },
        {
          path: "employee",
          element: (
            <Suspense fallback={<LoadingSkeleton />}>
              <AiEmployeePage />
            </Suspense>
          ),
        },
        {
          path: "user",
          element: (
            <Suspense fallback={<LoadingSkeleton />}>
              <AiEmployeePage />
            </Suspense>
          ),
        },
        {
          path: "/",
          element: (
            <Suspense fallback={<LoadingSkeleton />}>
              <DashBoardPage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/*",
      element: (
        <Suspense fallback={<LoadingIndicator />}>
          <ErrorPage />
        </Suspense>
      ),
    },
  ]);

  return routes;
}

export default MainRoutes;
