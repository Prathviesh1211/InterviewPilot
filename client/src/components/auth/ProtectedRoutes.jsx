import { Navigate, Outlet } from "react-router-dom";

import useAuthStore from "../../store/authStore";

const ProtectedRoute = () => {
  const user = useAuthStore((state) => state.user);
  const authLoading = useAuthStore((state) => state.authLoading);

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#09090B] text-white">
        <div className="text-sm text-zinc-400">
          Loading...
        </div>
      </div>
    );
  }

  if (!user) {
    console.log("No user → redirecting to login");
    return <Navigate to="/login" replace />;
  }
console.log("User authenticated → showing dashboard");
  return <Outlet />;
};

export default ProtectedRoute;