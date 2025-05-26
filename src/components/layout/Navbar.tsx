import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary-600" />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-700' : 'text-white' } `}>NexusAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 
                  ${isScrolled ? '' : 'text-white'}
                  ${
                  location.pathname === link.path
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                } `}
              >
                {link.name}
              </Link>
            ))}
            {/* <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-primary-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="container-custom py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-2 font-medium ${
                location.pathname === link.path
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* <Link
            to="/contact"
            className="block w-full text-center btn btn-primary mt-4"
          >
            Contact Us
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;