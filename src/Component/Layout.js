import React from "react";
import { Link,Outlet } from "react-router-dom";
import './Layout.css';
function Layout() {
  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li className="list">
            <Link to="/" className="link">Home</Link>
            <Link to="/todo" className="link">Todo</Link>
            <Link to='/counter' className="link">Counter</Link>
            <Link to='/accordion' className="link">Accordion</Link>
            <Link to='/select-example' className="link">SelectExample</Link>
            </li>
        </ul>
      </nav>
     <Outlet/>
    </div>
  );
}

export default Layout;
