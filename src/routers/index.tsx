import { Skeleton, Spin } from 'antd';
import { Suspense, lazy } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import PageWithTitle from '../components/shared/PageWithTitle'; // Import component wrapper
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import PrivateRoute from '../components/shared/PrivateRoute';
import ForgotForm from '../components/auth/ForgotForm';

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
const AuthPage = lazy(() => import('../pages/auth'));
const DashBoardPage = lazy(() => import('../pages/dashboard'));
const ErrorPage = lazy(() => import('../pages/errors'));
const MainPage = lazy(() => import('../pages'));
const AiEmployeePage = lazy(() => import('../pages/aiEmployee'));

const getTitleFromLocation = (pathname: string) => {
  switch (pathname) {
    case '/auth/login':
      return 'Đăng nhập';
    case '/auth/signup':
      return 'Đăng kí';
    case '/':
      return 'Trang Chính';
    case '/about':
      return 'Giới Thiệu';
    case '/ai-employee':
      return 'Nhân Viên AI';
    case '/employee':
      return 'Nhân Viên';
    case '/user':
      return 'Người Dùng';
    default:
      return '404 - Không Tìm Thấy Trang';
  }
};

function MainRoutes() {
  const location = useLocation();
  const title = getTitleFromLocation(location.pathname);

  const routes = useRoutes([
    {
      path: '/auth',
      element: (
        <PageWithTitle title={title}>
          <Suspense fallback={<LoadingIndicator />}>
            <AuthPage />
          </Suspense>
        </PageWithTitle>
      ),
      children: [
        {
          path: 'login',
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <LoginForm />
              </Suspense>
            </PageWithTitle>
          ),
        },
        {
          path: 'signup',
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <SignupForm />
              </Suspense>
            </PageWithTitle>
          ),
        },
        {
          path: 'forgot-pass',
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <ForgotForm />
              </Suspense>
            </PageWithTitle>
          ),
        }
      ]
    },
    {
      path: '/',
      element: (
        <PrivateRoute element={<MainPage />} />
      ),
      children: [
        {
          path: 'ai-employee',
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <AiEmployeePage />
              </Suspense>
            </PageWithTitle>
          ),
        },
        {
          path: 'employee',
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <AiEmployeePage />
              </Suspense>
            </PageWithTitle>
          ),
        },
        {
          path: 'user',
          element: (
            <PageWithTitle title={title}>
              <Suspense fallback={<LoadingSkeleton />}>
                <AiEmployeePage />
              </Suspense>
            </PageWithTitle>
          ),
        },
        {
          path: '/',
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
      path: '/*',
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
