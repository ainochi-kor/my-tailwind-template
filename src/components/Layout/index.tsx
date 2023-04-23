import { PropsWithChildren } from "react";

interface P extends PropsWithChildren {}

const Layout: React.FC<P> = ({ children }) => {
  return <main className="w-screen h-screen">{children}</main>;
};

export default Layout;
