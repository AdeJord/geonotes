import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Auth from "./user/pages/Auth";
import AllNotes from "./user/pages/AllNotes";
import Home from "./shared/pages/Home";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import MyNotes from "./user/pages/MyNotes";

function App() {
  return (
    <Router>
    <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/allnotes">
          <AllNotes />
        </Route>
        <Route path="/mynotes">
          <MyNotes />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
