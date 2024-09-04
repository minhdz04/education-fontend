import { Skeleton, Spin } from "antd";
import { Suspense, lazy } from "react";
import { matchPath, useLocation, useRoutes } from "react-router-dom";
import ForgotForm from "../components/auth/ForgotForm";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";
import PageWithTitle from "../components/shared/PageWithTitle"; // Import component wrapper
import PrivateRoute from "../components/shared/PrivateRoute";

// Loading Components
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
const ClassPage = lazy(() => import("../pages/classes"));
const MainPage = lazy(() => import("../pages"));
const StudentPage = lazy(() => import("../pages/student"));
const TeacherPage = lazy(() => import("../pages/teacher"));


const getTitleFromLocation = (pathname: string) => {
  if (
    matchPath({ path: "/student-list/class/:classId", end: false }, pathname)
  ) {
    return "Quản lý học sinh";
  }
  switch (pathname) {
    case "/auth/login":
      return "Đăng nhập";
    case "/auth/signup":
      return "Đăng kí";
    case "/":
      return "Trang Chính";
    case "/about":
      return "Giới Thiệu";
    case "/users":
      return "Quản lý người dùng";
    case "/students":
      return "Quản lý học sinh";
    case "/teachers":
      return "Quản lý giáo viên";
    case "/classes":
      return "Quản lý lớp học ";
    default:
      return "404 - Không Tìm Thấy Trang";
  }
};

function MainRoutes() {
  const location = useLocation();
  const title = getTitleFromLocation(location.pathname);

  const routes = useRoutes([
    {
      path: "/auth",
      element: (
        <PageWithTitle title={title}>
          <Suspense fallback={<LoadingIndicator />}>
            <AuthPage />
          </Suspense>
        </PageWithTitle>
      ),
      children: [
        {
          path: "login",
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <LoginForm />
              </Suspense>
            </PageWithTitle>
          ),
        },
        {
          path: "signup",
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <SignupForm />
              </Suspense>
            </PageWithTitle>
          ),
        },
        {
          path: "forgot-pass",
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <ForgotForm />
              </Suspense>
            </PageWithTitle>
          ),
        },
      ],
    },
    {
      path: "/",
      element: <PrivateRoute element={<MainPage />} />,
      children: [
        {
          path: "users",
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                {/* <AiEmployeePage /> */}
              </Suspense>
            </PageWithTitle>
          ),
        },
        {
          path: "classes",
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <ClassPage />
              </Suspense>
            </PageWithTitle>
          ),
        },
        {
          path: "student-list/class/:classId",
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <StudentPage />
              </Suspense>
            </PageWithTitle>
          ),
        },
        {
          path: "teachers",
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <TeacherPage />
              </Suspense>
            </PageWithTitle>
          ),
        },
        {
          path: "/",
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <DashBoardPage />
              </Suspense>
            </PageWithTitle>
          ),
        },
      ],
    },
    {
      path: "/*",
      element: (
        <PageWithTitle title={title}>
          <Suspense fallback={<LoadingIndicator />}>
            <ErrorPage />
          </Suspense>
        </PageWithTitle>
      ),
    },
  ]);

  return routes;
}

export default MainRoutes;
