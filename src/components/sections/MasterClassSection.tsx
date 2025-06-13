import React, { useState, useEffect } from 'react';
import { Play, Users, ChevronLeft, ChevronRight, Video, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
import MasterClassCard from '../ui/MasterClassCard';

interface MasterClass {
  _id: string;
  masterClassBanner: string;
  viewers: number;
  masterClassName: string;
  skills: string[];
  keynoteSpeaker: string;
  goal: string;
  location: string;
  industryType: string;
  date: string;
  masterClassDesc: string;
  createdAt: string;
  updatedAt: string;
}

const MASTERCLASSES_PER_PAGE = 3;

const MasterClassSection: React.FC = () => {
  const [masterClasses, setMasterClasses] = useState<MasterClass[]>([]);
  const [filteredMasterClasses, setFilteredMasterClasses] = useState<MasterClass[]>([]);
  const [filters, setFilters] = useState<Record<string, string | string[]>>({});
//   const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMasterClasses = async () => {
      try {
        const res = await axios.get('/api/masterclasses');
        setMasterClasses(res.data);
        setFilteredMasterClasses(res.data);
      } catch (error) {
        console.error('Error fetching MasterClasses:', error);
      }
    };

    fetchMasterClasses();
  }, []);

  const handleFilterChange = (filterKey: string, value: string | string[]) => {
    const newFilters = { ...filters, [filterKey]: value };
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filtering

    const filtered = masterClasses.filter(masterClass => {
      if (newFilters.industryType && masterClass.industryType !== newFilters.industryType) return false;
      if (newFilters.location && masterClass.location !== newFilters.location) return false;
      return true;
    });

    setFilteredMasterClasses(filtered);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredMasterClasses.length / MASTERCLASSES_PER_PAGE);
  const startIndex = (currentPage - 1) * MASTERCLASSES_PER_PAGE;
  const endIndex = startIndex + MASTERCLASSES_PER_PAGE;
  const currentMasterClasses = filteredMasterClasses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of section
    document.getElementById('masterclass')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="masterclass" className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Video className="text-purple-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Master Classes</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn from industry experts through live interactive sessions and hands-on workshops
          </p>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Play className="text-red-500" size={20} />
              <span className="text-sm font-semibold text-gray-700">Live Sessions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Users className="text-blue-500" size={20} />
              <span className="text-sm font-semibold text-gray-700">Interactive Learning</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Award className="text-amber-500" size={20} />
              <span className="text-sm font-semibold text-gray-700">Expert Instructors</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-200">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-sm font-semibold text-gray-700">Filter by:</span>
              <select 
                className="px-4 py-2 text-black rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => handleFilterChange('industryType', e.target.value)}
              >
                <option value="">All Industries</option>
                <option value="Technology">Technology</option>
                <option value="Marketing">Marketing</option>
                <option value="AI/ML">AI/ML</option>
                <option value="Design">Design</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Finance">Finance</option>
                <option value="Leadership">Leadership</option>
              </select>
              <select 
                className="px-4 py-2 text-black rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">All Formats</option>
                <option value="Online Live Session">Online Live</option>
                <option value="Hybrid - Mumbai">Hybrid - Mumbai</option>
                <option value="Hybrid - Bangalore">Hybrid - Bangalore</option>
                <option value="Hybrid - Delhi">Hybrid - Delhi</option>
                <option value="Hybrid - Pune">Hybrid - Pune</option>
              </select>
            </div>
          </div>
        </div>

        {/* Master Class Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentMasterClasses.map(masterClass => (
            <MasterClassCard key={masterClass._id} masterClass={masterClass} />
          ))}
        </div>

        {/* No Results */}
        {filteredMasterClasses.length === 0 && (
          <div className="text-center py-12">
            <Video className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No master classes found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-purple-600 hover:bg-purple-50 shadow-sm hover:shadow-md'
              }`}
            >
              <ChevronLeft size={16} />
              Previous
            </motion.button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 shadow-sm hover:shadow-md'
                  }`}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-purple-600 hover:bg-purple-50 shadow-sm hover:shadow-md'
              }`}
            >
              Next
              <ChevronRight size={16} />
            </motion.button>
          </div>
        )}

        {/* Live Learning Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-3xl p-8 text-center text-white shadow-2xl mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Join Live Interactive Learning</h3>
            <p className="text-xl mb-6 text-purple-50">
              Connect with industry experts, ask questions in real-time, and accelerate your learning 
              through hands-on workshops and personalized guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-purple-100">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-purple-100">Live Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-purple-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterClassSection;