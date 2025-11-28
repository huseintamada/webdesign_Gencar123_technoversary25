import "boxicons/css/boxicons.min.css";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const handleMobileLinkClick = () => setMobileOpen(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/70 backdrop-blur-md flex justify-between items-center py-4 px-4 lg:px-20">
      
      {/* Logo → bisa diklik */}
      <a href="#hero" className="text-3xl md:text-4xl lg:text-5xl font-light m-0 hover:text-gray-300 transition">
        TRASHUP
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-12">
        <a href="#hero" className="text-white hover:text-gray-300">Home</a>
        <a href="#about" className="text-white hover:text-gray-300">About</a>
        <a href="#gallery" className="text-white hover:text-gray-300">Gallery</a>
        <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
      </nav>

      {/* Desktop User Button */}
      <button className="hidden md:flex items-center text-white text-3xl hover:text-gray-300">
        <i className="bx bx-user"></i>
      </button>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden flex items-center gap-4 z-50">
        <button className="text-3xl text-white">
          <i className="bx bx-user"></i>
        </button>

        <button
          className="text-3xl p-2 text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className={`bx ${mobileOpen ? "bx-x" : "bx-menu-alt-right"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-8 transform transition-transform duration-300 z-40
        ${mobileOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <a href="#hero" onClick={handleMobileLinkClick} className="text-white text-2xl hover:text-gray-300">Home</a>
        <a href="#about" onClick={handleMobileLinkClick} className="text-white text-2xl hover:text-gray-300">About</a>
        <a href="#gallery" onClick={handleMobileLinkClick} className="text-white text-2xl hover:text-gray-300">Gallery</a>
        <a href="#contact" onClick={handleMobileLinkClick} className="text-white text-2xl hover:text-gray-300">Contact</a>
      </div>
    </header>
  );
};

export default Header;
