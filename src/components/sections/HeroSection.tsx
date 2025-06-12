import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
           <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium mb-4">
              Are you a graduate or pre-final year student? Looking for careers or internships?
            </p>
        <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          Discover Your Ideal <span className="text-blue-300">Career Pathways</span>
        </h5>
        </motion.div>

        <motion.p
          className="text-md sm:text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Let’s start from here and grab the right opportunity!
        </motion.p>

        {/* Search */}
        <motion.form
          onSubmit={handleSearch}
          className="relative max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <input
            type="text"
            placeholder="Search for courses, internships, jobs, or programs..."
            className="w-full px-6 py-4 pr-16 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors"
          >
            <Search size={18} />
          </button>
        </motion.form>

        {/* Quick Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { label: 'Internships', href: '#internships' },
            { label: 'Jobs & Careers', href: '#jobs' },
            { label: 'Bootcamps', href: '#bootcamps' },
            { label: 'PGP', href: '#postgrad' },
            { label: 'Global Programs', href: '#global' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex items-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-5 py-2 rounded-full backdrop-blur-sm transition-all"
            >
              <span>{item.label}</span>
              <ChevronRight size={16} className="ml-1" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
