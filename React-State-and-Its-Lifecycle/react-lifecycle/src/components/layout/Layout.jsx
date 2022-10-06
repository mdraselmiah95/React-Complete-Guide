import React from "react";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  //   console.log(props:{children});
  return (
    <div>
      <nav className={classes.nav}>
        <div className={classes.brand}>Brand Name</div>
        <div className={classes.menu}>
          <ul>
            <li>Link One</li>
            <li>Link Two</li>
            <li>Link Three</li>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>{children}</main>
      <footer className={classes.footer}>
        <p>This page &#169; by Rasel mia</p>
      </footer>
    </div>
  );
};

export default Layout;
