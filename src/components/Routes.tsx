import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: Home
  },
  {
    path: "/Home",
    exact: true,
    sidebar: Home
  },
  {
    path: "/About",
    exact: true,
    sidebar: About
  },
  {
    path: "/Contact",
    exact: true,
    sidebar: Contact
  }
];

const Routes: React.FC = () => {
  return (
    <Router>
      <div className="body">
        <div
          style={{
            padding: "10px",
            height: "100%",
            width: "10em",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div
          style={{
            padding: "10px",
            width: "100%",
            height: "100%",
            background: "#282c34",
            color: "white"
          }}
        >
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>
      </div>
    </Router>
  );
};

export default Routes;
