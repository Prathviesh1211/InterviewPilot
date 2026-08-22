import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";
import Container from "../components/ui/Container";
import AuthHero from "../components/auth/AuthHero";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      {/* Header */}
      <header className="relative z-20 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <Logo />

          <Link
            to="/"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            ← Back to Home
          </Link>
        </Container>
      </header>

      {/* Main */}
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-6 py-4">

        {/* Left */}
        <div className="hidden w-1/2 pr-12 lg:block">
          <AuthHero />
        </div>

        {/* Right */}
        <div className="flex w-full justify-center lg:w-1/2">
          {children}
        </div>

      </main>
    </div>
  );
};

export default AuthLayout;