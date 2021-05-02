import React from "react";
import TheHeader from "./TheHeader";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <TheHeader />
      {children}
    </>
  );
};

export default Layout;
