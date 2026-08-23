import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Auth/Dashboard";
import LandingPage from "./pages/Landing/LandingPage";
import { Routes,Route } from "react-router-dom";
import { Toaster } from "sonner";
import ProtectedRoute from "./components/auth/ProtectedRoutes";
import { useEffect } from "react";
import useAuthStore from "./store/authStore";

function App() {
  const fetchUser=useAuthStore((state)=>state.fetchUser);
  useEffect(()=>{
    fetchUser().catch(()=>{})
  },[fetchUser])

  return <div className="min-h-screen bg-[#09090B] text-white">
    <>
      <Toaster
        position="top-right"
        richColors
        closeButton
      />
    <Routes >
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route element={<ProtectedRoute/>}>
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
    </>
  </div>
}

export default App;