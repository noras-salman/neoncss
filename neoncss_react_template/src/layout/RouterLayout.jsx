import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { DemoPage } from "../pages/DemoPage";
export function RouterLayout(props) {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <DemoPage />
        </Route>
      </Switch>
    </Router>
  );
}
