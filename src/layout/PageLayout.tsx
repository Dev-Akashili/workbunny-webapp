import { ReactNode } from "react";
import { Navbar } from "../components/navbar/Navbar";

export const PageLayout = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
