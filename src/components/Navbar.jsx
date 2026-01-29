import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/#projects" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 border-b border-transparent ${scrolled || isOpen
        ? "bg-black/80 backdrop-blur-md border-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse z-50"
        >
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-tight">
            Aafreen<span className="text-purple-500">.</span>
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors z-50"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white/80">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.path.startsWith("/#") ? (
                  <a
                    href={link.path}
                    className="block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className="block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA BUTTON (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-white px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all font-medium text-sm"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } fixed inset-0 z-40 bg-black md:hidden transition-all duration-300 ease-in-out flex flex-col justify-center items-center space-y-8 w-screen h-[61vh] pb-10 pt-20`}
      >
        <ul className="text-center space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.path.startsWith("/#") ? (
                <a
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-white hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-white hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-white hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
