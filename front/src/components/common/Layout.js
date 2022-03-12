import React from "react";
import Footer from "./Footer";
import NavigationBar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <br />
      <br />
      <br />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
