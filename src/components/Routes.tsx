import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

const Routes: React.FC = () => {
  return (
    <Router>
      <div>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )
}

export default Routes
