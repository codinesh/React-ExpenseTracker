import * as React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from "./Home"

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
  }
]

const Routes: React.FC = () => {
  return (
    <Router>
      <div className="">
        <div
          style={{
            padding: "10px",
            height: "100%",
            width: "100%",
            background: "#f0f0f0"
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about" />
          <Link to="/contact" />
        </div>

        <div>
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
  )
}

export default Routes
