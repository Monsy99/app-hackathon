import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Reservations } from "./components/Reservations";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/reservations" exact>
          <Reservations />
        </Route>
        <Route path="/default">Hello world!</Route>
        <Route path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
