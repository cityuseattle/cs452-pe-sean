import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app">
      <header className="header">
        <h1>Cities Application</h1>

        <nav>
          <ul className="navlist">
            <li>
              <Link to="/">Cities List</Link>
            </li>
            <li>
              <Link to="/add">Add City</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <small>CS452 — Cities App</small>
      </footer>
    </div>
  );
}
