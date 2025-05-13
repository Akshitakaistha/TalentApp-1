import React, { useState, useEffect } from 'react';
import { Search, Menu, X, BookOpen, Briefcase, GraduationCap, Globe, FileText, Building } from 'lucide-react';
import NavLink from './NavLink';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-800" />
            <span className="ml-2 text-xl font-bold text-blue-800">Talent</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink icon={<BookOpen size={18} />} label="Internships" href="#internships" />
            <NavLink icon={<Briefcase size={18} />} label="Jobs" href="#jobs" />
            <NavLink icon={<GraduationCap size={18} />} label="Bootcamps" href="#bootcamps" />
            <NavLink icon={<FileText size={18} />} label="Post Grad" href="#postgrad" />
            <NavLink icon={<Globe size={18} />} label="Global" href="#global" />
            <NavLink icon={<Building size={18} />} label="Our Presence" href="#presence" />
          </nav>

          {/* Search Button */}
          <div className={`hidden md:flex items-center ${isScrolled ? 'text-blue-800' : 'text-blue-700'}`}>
            <button className="flex items-center px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-all">
              <Search size={18} className="mr-2" />
              <span>Search Programs</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-blue-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink icon={<BookOpen size={18} />} label="Internships" href="#internships" mobile />
              <NavLink icon={<Briefcase size={18} />} label="Jobs" href="#jobs" mobile />
              <NavLink icon={<GraduationCap size={18} />} label="Bootcamps" href="#bootcamps" mobile />
              <NavLink icon={<FileText size={18} />} label="Post Grad" href="#postgrad" mobile />
              <NavLink icon={<Globe size={18} />} label="Global" href="#global" mobile />
              <NavLink icon={<Building size={18} />} label="Our Presence" href="#presence" mobile />
              
              <div className="pt-2 border-t border-gray-200">
                <button className="w-full flex items-center justify-center px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-all">
                  <Search size={18} className="mr-2 text-blue-800" />
                  <span className="text-blue-800">Search Programs</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;