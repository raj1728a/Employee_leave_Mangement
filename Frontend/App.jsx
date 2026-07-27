import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ApplyLeave from "./pages/applyleave";
import Profile from "./pages/profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/apply" element={<ApplyLeave />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
