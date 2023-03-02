import PhamacyDashboard from "./pages/PhamacyDashboard";
import { BrowserRouter } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import UserFront from "./pages/UserFront";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <UserFront />
      </BrowserRouter>
    </div>
  );
}

export default App;
