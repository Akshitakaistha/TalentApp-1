import React, { useState } from 'react';
import { GraduationCap, Clock, BookOpen } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import FilterBar from '../ui/FilterBar';
import ProgramCard from '../ui/ProgramCard';
import { Bootcamp } from '../../types';

// Sample data
const bootcampFilters = {
  qualification: {
    label: 'Your Qualification',
    options: [
      { id: 'any', label: 'Any Background', value: 'Any' },
      { id: 'it', label: 'IT/Computer Science', value: 'IT' },
      { id: 'business', label: 'Business/Commerce', value: 'Business' },
      { id: 'arts', label: 'Arts & Humanities', value: 'Arts' },
      { id: 'science', label: 'Science', value: 'Science' },
    ],
    type: 'dropdown',
  },
  goal: {
    label: 'What You Are Looking For',
    options: [
      { id: 'skills', label: 'New Skills', value: 'Skills' },
      { id: 'career', label: 'Career Change', value: 'Career' },
      { id: 'certification', label: 'Certification', value: 'Certification' },
      { id: 'startup', label: 'Startup Training', value: 'Startup' },
    ],
    type: 'dropdown',
  },
  duration: {
    label: 'Duration',
    options: [
      { id: '1-4', label: '1-4 Weeks', value: '1-4 Weeks' },
      { id: '1-3', label: '1-3 Months', value: '1-3 Months' },
      { id: '3+', label: '3+ Months', value: '3+ Months' },
    ],
    type: 'dropdown',
  },
};

const bootcamps: Bootcamp[] = [
  {
    id: '1',
    title: 'Full Stack Web Development Bootcamp',
    description: 'Comprehensive training in modern web development technologies, from frontend to backend.',
    category: 'Technology',
    tags: ['React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    qualification: 'Any',
    goal: 'Skills',
    duration: '3 Months',
  },
  {
    id: '2',
    title: 'Data Science Intensive',
    description: 'Accelerated program covering statistical analysis, machine learning, and data visualization.',
    category: 'Data Science',
    tags: ['Python', 'Machine Learning', 'Statistics'],
    imageUrl: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    qualification: 'Science',
    goal: 'Career',
    duration: '2 Months',
  },
  {
    id: '3',
    title: 'Digital Marketing Masterclass',
    description: 'Learn SEO, social media marketing, content strategy, and performance marketing.',
    category: 'Marketing',
    tags: ['SEO', 'Social Media', 'Analytics'],
    imageUrl: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    qualification: 'Any',
    goal: 'Certification',
    duration: '6 Weeks',
  },
  {
    id: '4',
    title: 'UX/UI Design Bootcamp',
    description: 'Intensive training in user experience design, interface design, and prototyping tools.',
    category: 'Design',
    tags: ['UX Research', 'UI Design', 'Figma'],
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    qualification: 'Any',
    goal: 'Skills',
    duration: '2 Months',
  },
];

const BootcampsSection: React.FC = () => {
  const [filteredBootcamps, setFilteredBootcamps] = useState<Bootcamp[]>(bootcamps);
  const [filters, setFilters] = useState<Record<string, string | string[]>>({});

  const handleFilterChange = (filterKey: string, value: string | string[]) => {
    const newFilters = { ...filters, [filterKey]: value };
    setFilters(newFilters);
    
    // Apply filters
    const filtered = bootcamps.filter(bootcamp => {
      // Check qualification filter
      if (newFilters.qualification && bootcamp.qualification !== newFilters.qualification && newFilters.qualification !== 'Any') {
        return false;
      }
      
      // Check goal filter
      if (newFilters.goal && bootcamp.goal !== newFilters.goal) {
        return false;
      }
      
      // Check duration filter
      if (newFilters.duration && bootcamp.duration !== newFilters.duration) {
        return false;
      }
      
      return true;
    });
    
    setFilteredBootcamps(filtered);
  };

  return (
    <section id="bootcamps" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Bootcamps - Skill Programs" 
          subtitle="Intensive training programs designed to help you acquire in-demand skills quickly"
        />
        
        <FilterBar 
          filters={bootcampFilters} 
          onFilterChange={handleFilterChange} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBootcamps.map(bootcamp => (
            <ProgramCard 
              key={bootcamp.id} 
              program={bootcamp}
              type="bootcamp"
              additionalInfo={
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <GraduationCap size={16} className="mr-2" />
                    <span>For: {bootcamp.qualification} backgrounds</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <BookOpen size={16} className="mr-2" />
                    <span>Goal: {bootcamp.goal}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock size={16} className="mr-2" />
                    <span>Duration: {bootcamp.duration}</span>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BootcampsSection;