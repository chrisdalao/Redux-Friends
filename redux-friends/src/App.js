import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Friends from "./components/Friends";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <Route path="/friends" component={Friends} />
      </div>
    </Router>
  );
}

export default App;
