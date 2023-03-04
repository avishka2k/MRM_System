import PhamacyDashboard from "./pages/PhamacyDashboard";
import { BrowserRouter } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import UserFront from "./pages/UserFront";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AdminDashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
