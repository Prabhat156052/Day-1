import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <nav className="nav-bar">
        <ul className="list">
          <li>
            <NavLink to="/" end className="link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/todo" className="link">
              Todo
            </NavLink>
          </li>

          <li>
            <NavLink to="/counter" className="link">
              Counter
            </NavLink>
          </li>

          <li>
            <NavLink to="/accordion" className="link">
              Accordion
            </NavLink>
          </li>

          <li>
            <NavLink to="/select-example" className="link">
              Select Example
            </NavLink>
          </li>
          // <li>
          //   <NavLink to="/modal" className="link">
          //     Modal
          //   </NavLink>
          // </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
