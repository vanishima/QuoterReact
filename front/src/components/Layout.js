import React from "react";
import Footer from "./Footer";
import UserNavBar from "./UserNavBar";

const Layout = ({ children }) => {

  // border-end
  
  return (
    <div>
      <main>
        <div className="row">

          <div className="col-2">
            <h1><div>Quoter</div></h1>
            <UserNavBar />
          </div>

          <div className="col-10">
            {children}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
