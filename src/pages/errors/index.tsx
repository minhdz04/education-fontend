import { Button } from "antd";
const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full p-4">
      <div className="bg-white h-full w-full p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <Button type="primary" size="large">
          <a href="/">Go back</a>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
