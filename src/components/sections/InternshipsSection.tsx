import React, { useState } from 'react';
import { Building, DollarSign, Clock } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import FilterBar from '../ui/FilterBar';
import ProgramCard from '../ui/ProgramCard';
import { Internship, FilterOption } from '../../types';

// Sample data
const internshipFilters = {
  type: {
    label: 'Internship Type',
    options: [
      { id: 'stipend', label: 'Stipend Based', value: 'stipend' },
      { id: 'freeship', label: 'Freeship', value: 'freeship' },
      { id: 'paid', label: 'Paid Training', value: 'paid' },
    ],
    type: 'radio',
  },
  duration: {
    label: 'Duration',
    options: [
      { id: '1-3', label: '1-3 Months', value: '1-3' },
      { id: '3-6', label: '3-6 Months', value: '3-6' },
      { id: '6+', label: '6+ Months', value: '6+' },
    ],
    type: 'dropdown',
  },
};

const internships: Internship[] = [
  {
    id: '1',
    title: 'Software Development Intern',
    description: 'Join our tech team to work on real-world projects using the latest technologies.',
    category: 'Technology',
    tags: ['Programming', 'Web Development', 'Software Engineering'],
    imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stipend: '₹15,000/month',
    duration: '6 months',
    type: 'stipend',
    company: 'TechSolutions Inc.',
    location: 'Bangalore',
  },
  {
    id: '2',
    title: 'Digital Marketing Internship',
    description: 'Learn digital marketing strategies while working on real campaigns for our clients.',
    category: 'Marketing',
    tags: ['Social Media', 'SEO', 'Content Writing'],
    imageUrl: 'https://images.pexels.com/photos/914931/pexels-photo-914931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stipend: '₹10,000/month',
    duration: '3 months',
    type: 'stipend',
    company: 'MarketEdge',
    location: 'Delhi',
  },
  {
    id: '3',
    title: 'Data Science Training Program',
    description: 'Comprehensive training in data science, machine learning, and analytics.',
    category: 'Data Science',
    tags: ['Python', 'ML', 'Statistics'],
    imageUrl: 'https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stipend: 'Certificate',
    duration: '2 months',
    type: 'freeship',
    company: 'DataTech Academy',
    location: 'Mumbai',
  },
  {
    id: '4',
    title: 'UI/UX Design Internship',
    description: 'Create beautiful, intuitive user interfaces for web and mobile applications.',
    category: 'Design',
    tags: ['UI Design', 'Figma', 'User Research'],
    imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stipend: '₹12,000/month',
    duration: '4 months',
    type: 'paid',
    company: 'DesignHub',
    location: 'Hyderabad',
  },
];

const InternshipsSection: React.FC = () => {
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>(internships);
  const [filters, setFilters] = useState<Record<string, string | string[]>>({});

  const handleFilterChange = (filterKey: string, value: string | string[]) => {
    const newFilters = { ...filters, [filterKey]: value };
    setFilters(newFilters);
    
    // Apply filters
    const filtered = internships.filter(internship => {
      // Check type filter
      if (newFilters.type && internship.type !== newFilters.type) {
        return false;
      }
      
      // Add other filter logic as needed
      
      return true;
    });
    
    setFilteredInternships(filtered);
  };

  return (
    <section id="internships" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Internships & Experiential Learning" 
          subtitle="Gain practical experience through on-job training with industry leaders"
        />
        
        <FilterBar 
          filters={internshipFilters} 
          onFilterChange={handleFilterChange} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredInternships.map(internship => (
            <ProgramCard 
              key={internship.id} 
              program={internship}
              type="internship"
              additionalInfo={
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Building size={16} className="mr-2" />
                    <span>{internship.company}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <DollarSign size={16} className="mr-2" />
                    <span>{internship.stipend}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock size={16} className="mr-2" />
                    <span>{internship.duration}</span>
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

export default InternshipsSection;