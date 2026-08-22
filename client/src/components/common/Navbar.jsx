import { Menu } from "lucide-react";
import Logo from "./Logo";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { NAV_LINKS } from "../../constants/navigation";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-all duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-3 md:flex">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>

            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile */}
          <button className="md:hidden">
            <Menu />
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
