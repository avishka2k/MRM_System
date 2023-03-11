import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileContent from "./components/ProfileContent";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import PhamacyDashboard from "./pages/PhamacyDashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PrivateRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<PhamacyDashboard />} path="/" exact />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route element={<Signin />} path="/login" />
          <Route element={<Signup />} path="/register" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
