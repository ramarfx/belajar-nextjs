import React, { ReactNode } from "react";
import Navbar from "../navbar";
import { useRouter } from "next/router";

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <div>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </div>
  );
};

export default AppShell;
