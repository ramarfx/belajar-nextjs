import React, { ReactNode } from "react";
import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
      <div>footer</div>
    </div>
  );
};

export default AppShell;
