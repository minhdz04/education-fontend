import { ReactNode } from "react";
import { Helmet } from "react-helmet";

interface PageWithTitleProps {
  title: string;
  children: ReactNode;
}

const PageWithTitle = ({ title, children }: PageWithTitleProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};

export default PageWithTitle;
