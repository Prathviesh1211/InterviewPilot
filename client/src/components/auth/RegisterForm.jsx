import { Link,useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  UserRound,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";

import useAuthStore from "../../store/authStore";
import { toast } from "sonner";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();

  const register = useAuthStore((state) => state.register);
  const loading = useAuthStore((state) => state.loading);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // -----------------------------
  // Field Validation
  // -----------------------------
  const validateField = (name, value) => {
    let error = "";

    if (name === "fullName") {
      const trimmedValue = value.trim();

      if (!trimmedValue) {
        error = "Please enter your full name.";
      } else if (trimmedValue.length < 2) {
        error = "Full name must be at least 2 characters.";
      } else if (trimmedValue.length > 50) {
        error = "Full name cannot exceed 50 characters.";
      }
    }

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
        error = "Please enter a password.";
      } else if (value.length < 8) {
        error = "Password must be at least 8 characters.";
      } else if (value.length > 100) {
        error = "Password cannot exceed 100 characters.";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error;
  };

  // -----------------------------
  // Handle Input
  // -----------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Password validation while typing
    if (name === "password") {
      validateField(name, value);
    } else if (errors[name]) {
      // Clear old error while editing
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // -----------------------------
  // Final Form Validation
  // -----------------------------
  const validateForm = () => {
    const newErrors = {};

    const fullNameError = validateField(
      "fullName",
      formData.fullName
    );

    const emailError = validateField(
      "email",
      formData.email
    );

    const passwordError = validateField(
      "password",
      formData.password
    );

    if (fullNameError) {
      newErrors.fullName = fullNameError;
    }

    if (emailError) {
      newErrors.email = emailError;
    }

    if (passwordError) {
      newErrors.password = passwordError;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // -----------------------------
  // Submit
  // -----------------------------
  const handleSubmit = async (e) => {
  e.preventDefault();

  const isValid = validateForm();

  if (!isValid) {
    toast.error("Please fix the highlighted fields.");
    return;
  }

  try {
    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    };

    const data = await register(payload);

    console.log("Registration successful:", data);

    toast.success("Account created successfully!");
    navigate("/dashboard")
  } catch (error) {
    console.error(
      "Registration failed:",
      error.response?.data || error.message
    );

    const message =
      error.response?.data?.message ||
      "Unable to create your account. Please try again.";

    toast.error(message);
  }
};

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-7 shadow-2xl shadow-black/20 backdrop-blur-sm">

        {/* Header */}
        <div className="mb-7 text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
            Get Started
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Create your{" "}
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              account
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-500">
            Start preparing for your next interview today.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Full Name
            </label>

            <div className="group relative">
              <UserRound
                size={16}
                className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                  errors.fullName
                    ? "text-red-400"
                    : "text-zinc-500 group-focus-within:text-violet-400"
                }`}
              />

              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={(e) =>
                  validateField("fullName", e.target.value)
                }
                placeholder="John Doe"
                className={`h-12 w-full rounded-xl border bg-zinc-900 pl-11 pr-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/10 ${
                  errors.fullName
                    ? "border-red-500/70 focus:border-red-500"
                    : "border-zinc-700/80 focus:border-violet-500"
                }`}
              />
            </div>

            {errors.fullName && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.fullName}
              </p>
            )}
          </div>

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
                onBlur={(e) =>
                  validateField("email", e.target.value)
                }
                placeholder="you@example.com"
                className={`h-12 w-full rounded-xl border bg-zinc-900 pl-11 pr-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/10 ${
                  errors.email
                    ? "border-red-500/70 focus:border-red-500"
                    : "border-zinc-700/80 focus:border-violet-500"
                }`}
              />
            </div>

            {errors.email && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-zinc-300">
                Password
              </label>

              <span className="text-xs text-zinc-600">
                8+ characters
              </span>
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
                onBlur={(e) =>
                  validateField("password", e.target.value)
                }
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
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.password}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="group h-12 w-full rounded-xl font-semibold shadow-lg shadow-violet-600/20"
          >
            {loading ? "Creating Account..." : "Create Account"}

            {!loading && (
              <ArrowRight
                size={17}
                className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
              />
            )}
          </Button>
        </form>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            Sign in
          </Link>
        </p>
      </div>

      {/* Reassurance */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
        <ShieldCheck size={14} className="text-zinc-500" />
        <span>Free to get started · No credit card required</span>
      </div>
    </div>
  );
};

export default RegisterForm;