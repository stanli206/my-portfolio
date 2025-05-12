import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#home"
            className="text-2xl font-bold text-white"
          >
            <span className="text-teal-400">MERN</span> Dev
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="text-gray-300 hover:text-teal-400 p-2 rounded-full"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Hire Me
            </motion.a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="text-gray-300 hover:text-teal-400 p-2 rounded-full"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-teal-400 p-2 rounded-full"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-sm"
        >
          <ul className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-center"
              >
                <a
                  href={link.href}
                  className="block py-2 text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </motion.a>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;