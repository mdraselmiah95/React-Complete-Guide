import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./Layout.module.css";

const Layout = (props) => {
  //   console.log(props:{children});
  return (
    <div>
      <nav className={classes.nav}>
        <div className={classes.brand}>Brand Name</div>
        <div className={classes.menu}>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "red" : "inherit",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="about"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "red" : "inherit",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "red" : "inherit",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <main className={classes.main}>{props.children}</main>
      </div>
      <footer className={classes.footer}>
        <p>This page &#169; by Rasel mia</p>
      </footer>
    </div>
  );
};

export default Layout;
