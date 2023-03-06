import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Signin from "./pages/Signin";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          component={
            <PrivateRoute>
              <h1>Home Page</h1>
            </PrivateRoute>
          }
        />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/register" exact component={RegisterForm} />
      </Routes>
    </Router>
  );
}

export default App;
