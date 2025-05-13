import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Your Ideal <span className="text-blue-300">Educational Path</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Explore opportunities that match your aspirations and skills.
            We connect students with the right careers, courses, and training programs.
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-12">
            <input
              type="text"
              placeholder="Search for courses, internships, jobs, or programs..."
              className="w-full px-5 py-4 pr-14 rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-1 top-1 bottom-1 bg-blue-700 text-white rounded-full w-12 flex items-center justify-center hover:bg-blue-800 transition-colors"
            >
              <Search size={20} />
            </button>
          </form>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a href="#internships" className="inline-flex items-center text-white bg-blue-700 bg-opacity-30 hover:bg-opacity-50 px-4 py-2 rounded-full transition-all">
              <span>Internships</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
            <a href="#jobs" className="inline-flex items-center text-white bg-blue-700 bg-opacity-30 hover:bg-opacity-50 px-4 py-2 rounded-full transition-all">
              <span>Jobs & Careers</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
            <a href="#bootcamps" className="inline-flex items-center text-white bg-blue-700 bg-opacity-30 hover:bg-opacity-50 px-4 py-2 rounded-full transition-all">
              <span>Bootcamps</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
            <a href="#postgrad" className="inline-flex items-center text-white bg-blue-700 bg-opacity-30 hover:bg-opacity-50 px-4 py-2 rounded-full transition-all">
              <span>Post Graduate</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
            <a href="#global" className="inline-flex items-center text-white bg-blue-700 bg-opacity-30 hover:bg-opacity-50 px-4 py-2 rounded-full transition-all">
              <span>Global Programs</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;