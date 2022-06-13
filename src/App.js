import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Create from "./pages/create/Create";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import SignUp from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/projects/:id">
              <Project />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
