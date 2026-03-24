import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/info", label: "Информация" },
  { to: "/how-to-play", label: "Как начать" },
  { to: "/guides", label: "Гайды" },
  { to: "/rules", label: "Правила" },
  { to: "/promo", label: "Промокоды" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e1e1e] bg-[#090909]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-[#FF8C00] flex items-center justify-center pulse-orange">
            <span className="font-orbitron text-[#FF8C00] text-xs font-black">A</span>
          </div>
          <span className="font-orbitron text-white font-bold text-lg tracking-widest group-hover:neon-orange transition-all">
            ASTELLAS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 font-oswald text-sm tracking-wider uppercase transition-all hover:text-[#FF8C00] ${
                location.pathname === l.to
                  ? "text-[#FF8C00] border-b border-[#FF8C00]"
                  : "text-gray-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="steam://connect/play.astellas.ru:2302"
            className="flex items-center gap-2 px-4 py-2 bg-[#FF8C00] text-black font-orbitron text-xs font-bold uppercase tracking-wider hover:bg-[#FF6B00] transition-all pulse-orange"
          >
            <Icon name="Play" size={14} />
            Начать игру
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#FF8C00]"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-[#1e1e1e] px-4 py-4 flex flex-col gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`py-2 font-oswald text-sm tracking-wider uppercase border-b border-[#1e1e1e] ${
                location.pathname === l.to ? "text-[#FF8C00]" : "text-gray-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="steam://connect/play.astellas.ru:2302"
            className="mt-2 flex items-center justify-center gap-2 py-3 bg-[#FF8C00] text-black font-orbitron text-xs font-bold uppercase tracking-wider"
          >
            <Icon name="Play" size={14} />
            Начать игру
          </a>
        </div>
      )}
    </nav>
  );
}
