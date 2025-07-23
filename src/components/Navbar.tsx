import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-gray-950 shadow-lg fixed z-50 border-b border-blue-200 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-extrabold text-blue-700 dark:text-yellow-400 bg-transparent border-none cursor-pointer"
        >
          Tushar Tugnait
        </button>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href.replace("#", ""))}
              className="text-gray-900 dark:text-gray-100 hover:text-blue-700 dark:hover:text-yellow-400 font-semibold transition bg-transparent border-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
        <button
          className="md:hidden text-blue-700 dark:text-yellow-400 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-950 shadow-lg border-t border-blue-200 dark:border-gray-800">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.href.replace("#", ""));
                  setOpen(false);
                }}
                className="text-gray-900 dark:text-gray-100 hover:text-blue-700 dark:hover:text-yellow-400 font-semibold transition bg-transparent border-none cursor-pointer text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;