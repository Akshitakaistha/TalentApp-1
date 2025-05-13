import React, { useState } from 'react';
import { Globe, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import FilterBar from '../ui/FilterBar';
import ProgramCard from '../ui/ProgramCard';
import { GlobalProgram } from '../../types';

// Sample data
const globalFilters = {
  type: {
    label: 'Program Type',
    options: [
      { id: 'immersion', label: 'Immersion', value: 'immersion' },
      { id: 'certificate', label: 'Certificate', value: 'certificate' },
      { id: 'conference', label: 'Conference', value: 'conference' },
      { id: 'pathways', label: 'Degree Pathways', value: 'pathways' },
    ],
    type: 'radio',
  },
  region: {
    label: 'Region',
    options: [
      { id: 'usa', label: 'USA & Canada', value: 'North America' },
      { id: 'europe', label: 'Europe', value: 'Europe' },
      { id: 'asia', label: 'Asia Pacific', value: 'Asia Pacific' },
      { id: 'australia', label: 'Australia & NZ', value: 'Australia' },
    ],
    type: 'dropdown',
  },
};

const globalPrograms: GlobalProgram[] = [
  {
    id: '1',
    title: 'Silicon Valley Tech Immersion Program',
    description: 'Two-week intensive immersion into the Silicon Valley tech ecosystem, with company visits and workshops.',
    category: 'Technology',
    tags: ['Tech', 'Startup', 'Innovation'],
    imageUrl: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'immersion',
    country: 'USA',
    duration: '2 Weeks',
  },
  {
    id: '2',
    title: 'International Business Certificate - London',
    description: 'Certificate program in international business practices at a leading London business school.',
    category: 'Business',
    tags: ['Business', 'International', 'Finance'],
    imageUrl: 'https://images.pexels.com/photos/2098619/pexels-photo-2098619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'certificate',
    country: 'UK',
    duration: '3 Months',
  },
  {
    id: '3',
    title: 'Global Youth Leadership Conference - Singapore',
    description: 'Annual conference bringing together young leaders from around the world to discuss global challenges.',
    category: 'Leadership',
    tags: ['Youth', 'Leadership', 'Global'],
    imageUrl: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'conference',
    country: 'Singapore',
    duration: '1 Week',
  },
  {
    id: '4',
    title: 'Study Abroad Pathway - Australia',
    description: 'Complete your degree at a top Australian university with credit transfer and scholarship opportunities.',
    category: 'Education',
    tags: ['Study Abroad', 'Degree', 'International'],
    imageUrl: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'pathways',
    country: 'Australia',
    duration: '1-3 Years',
  },
];

const GlobalSection: React.FC = () => {
  const [filteredPrograms, setFilteredPrograms] = useState<GlobalProgram[]>(globalPrograms);
  const [filters, setFilters] = useState<Record<string, string | string[]>>({});

  const handleFilterChange = (filterKey: string, value: string | string[]) => {
    const newFilters = { ...filters, [filterKey]: value };
    setFilters(newFilters);
    
    // Apply filters
    const filtered = globalPrograms.filter(program => {
      // Check type filter
      if (newFilters.type && program.type !== newFilters.type) {
        return false;
      }
      
      // Add region filter logic based on country
      // This is simplified for demo purposes
      
      return true;
    });
    
    setFilteredPrograms(filtered);
  };

  return (
    <section id="global" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Global Programs" 
          subtitle="Get international exposure and broaden your horizons with our global education opportunities"
        />
        
        <FilterBar 
          filters={globalFilters} 
          onFilterChange={handleFilterChange} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPrograms.map(program => (
            <ProgramCard 
              key={program.id} 
              program={program}
              type="global"
              additionalInfo={
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Globe size={16} className="mr-2" />
                    <span>
                      {program.type === 'immersion' ? 'Immersion Program' : 
                       program.type === 'certificate' ? 'Certificate Program' : 
                       program.type === 'conference' ? 'Conference' : 'Degree Pathway'}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin size={16} className="mr-2" />
                    <span>{program.country}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock size={16} className="mr-2" />
                    <span>{program.duration}</span>
                  </div>
                </div>
              }
            />
          ))}
        </div>
        
        {/* Global Experience Highlight */}
        <div className="mt-12 bg-blue-700 text-white rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Global Exposure Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Enhanced career prospects with international experience</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Develop cross-cultural communication skills</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Build a global professional network</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gain a global perspective on your field</span>
                </li>
              </ul>
              <button className="mt-6 bg-white text-blue-700 hover:bg-blue-50 px-5 py-2 rounded-full font-medium transition-colors">
                Explore All Global Programs
              </button>
            </div>
            <div className="bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: 'url("https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;