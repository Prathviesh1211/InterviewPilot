import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import Button from "../ui/Button";
import Input from "../ui/Input";

import useAuthStore from "../../store/authStore";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (name === "email") {
      const trimmedValue = value.trim();

      if (!trimmedValue) {
        error = "Please enter your email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
        error = "Invalid email address.";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "Please enter your password.";
      } else if (value.length < 8) {
        error = "Password must be at least 8 characters.";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      validateField(name, value);
    } else if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const emailError = validateField("email", formData.email);
    const passwordError = validateField("password", formData.password);

    return !emailError && !passwordError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    try {
      const payload = {
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      };

      const data = await login(payload);

      console.log("Login successful:", data);

      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);

      const message =
        error.response?.data?.message ||
        "Unable to log in. Please check your credentials.";

      toast.error(message);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-7 shadow-2xl shadow-black/20 backdrop-blur-sm">
        {/* Header */}
        <div className="mb-7 text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
            Welcome Back
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Sign in to{" "}
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              InterviewPilot
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-500">
            Continue your interview preparation journey.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Email
            </label>

            <div className="group relative">
              <Mail
                size={16}
                className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                  errors.email
                    ? "text-red-400"
                    : "text-zinc-500 group-focus-within:text-violet-400"
                }`}
              />

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={(e) => validateField("email", e.target.value)}
                placeholder="you@example.com"
                className={`h-12 w-full rounded-xl border bg-zinc-900 pl-11 pr-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/10 ${
                  errors.email
                    ? "border-red-500/70 focus:border-red-500"
                    : "border-zinc-700/80 focus:border-violet-500"
                }`}
              />
            </div>

            {errors.email && (
              <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-zinc-300">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-xs text-violet-400 transition-colors hover:text-violet-300"
              >
                Forgot password?
              </Link>
            </div>

            <div className="group relative">
              <Lock
                size={16}
                className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                  errors.password
                    ? "text-red-400"
                    : "text-zinc-500 group-focus-within:text-violet-400"
                }`}
              />

              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={(e) => validateField("password", e.target.value)}
                placeholder="••••••••"
                className={`h-12 w-full rounded-xl border bg-zinc-900 pl-11 pr-11 text-sm text-white placeholder:text-zinc-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/10 ${
                  errors.password
                    ? "border-red-500/70 focus:border-red-500"
                    : "border-zinc-700/80 focus:border-violet-500"
                }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors hover:text-zinc-300"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1.5 text-xs text-red-400">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="group h-12 w-full rounded-xl font-semibold shadow-lg shadow-violet-600/20"
          >
            {loading ? "Signing In..." : "Sign In"}

            {!loading && (
              <ArrowRight
                size={17}
                className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
              />
            )}
          </Button>
        </form>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            Create one
          </Link>
        </p>
      </div>

      {/* Reassurance */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
        <ShieldCheck size={14} className="text-zinc-500" />
        <span>Secure authentication · Your data stays private</span>
      </div>
    </div>
  );
};

export default LoginForm;
