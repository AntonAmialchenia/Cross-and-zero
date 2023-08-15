import { FC, ReactNode } from "react";

interface HomePageLayoutProps {
  header: ReactNode;
  children: ReactNode;
}

export const HomePageLayout: FC<HomePageLayoutProps> = ({
  header,
  children,
}) => {
  return (
    <div className=" bg-slate-50 min-h-screen">
      {header}
      <main className=" pt-6 mx-auto w-max">{children}</main>
    </div>
  );
};
