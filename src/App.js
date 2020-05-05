import React from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
