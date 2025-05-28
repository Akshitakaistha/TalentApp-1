import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, BookOpen, Briefcase, GraduationCap, Globe, FileText, Building, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { icon: BookOpen, label: 'Internships', href: '#internships' },
    { icon: Briefcase, label: 'Jobs', href: '#jobs' },
    { icon: GraduationCap, label: 'Bootcamps', href: '#bootcamps' },
    { icon: Globe, label: 'Global', href: '#global' },
    { icon: FileText, label: 'Exams', href: '#exams' },
    { icon: Building, label: 'Locations', href: '#locations' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              TalentApp
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
          </nav>

          {/* Search and Auth */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search programs..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Auth Button */}
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </a>
              ))}
              
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search programs..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useAuth } from '../../context/AuthContext';
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