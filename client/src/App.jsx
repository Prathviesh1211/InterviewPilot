import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Auth/Dashboard";
import LandingPage from "./pages/Landing/LandingPage";
import { Routes,Route } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  return <div className="min-h-screen bg-[#09090B] text-white">
    <>
      <Toaster
        position="top-right"
        richColors
        closeButton
      />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  </div>
}

export default App;