import React, { useState } from 'react';
import { Building, DollarSign, MapPin, Briefcase } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import FilterBar from '../ui/FilterBar';
import ProgramCard from '../ui/ProgramCard';
import { Job } from '../../types';

// Sample data
const jobFilters = {
  location: {
    label: 'Location',
    options: [
      { id: 'delhi', label: 'Delhi', value: 'Delhi' },
      { id: 'mumbai', label: 'Mumbai', value: 'Mumbai' },
      { id: 'bangalore', label: 'Bangalore', value: 'Bangalore' },
      { id: 'hyderabad', label: 'Hyderabad', value: 'Hyderabad' },
      { id: 'chennai', label: 'Chennai', value: 'Chennai' },
    ],
    type: 'dropdown',
  },
  salaryRange: {
    label: 'Salary Range',
    options: [
      { id: '0-3', label: '₹0-3 LPA', value: '0-3' },
      { id: '3-6', label: '₹3-6 LPA', value: '3-6' },
      { id: '6-10', label: '₹6-10 LPA', value: '6-10' },
      { id: '10+', label: '₹10+ LPA', value: '10+' },
    ],
    type: 'dropdown',
  },
  interestArea: {
    label: 'Interest Area',
    options: [
      { id: 'tech', label: 'Technology', value: 'Technology' },
      { id: 'marketing', label: 'Marketing', value: 'Marketing' },
      { id: 'finance', label: 'Finance', value: 'Finance' },
      { id: 'hr', label: 'HR', value: 'HR' },
      { id: 'design', label: 'Design', value: 'Design' },
    ],
    type: 'dropdown',
  },
};

const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    description: 'Design and implement user-facing features for web applications using React and TypeScript.',
    category: 'Technology',
    tags: ['React', 'JavaScript', 'UI/UX'],
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    salary: '₹8-12 LPA',
    company: 'WebTech Solutions',
    location: 'Bangalore',
    interestArea: 'Technology',
  },
  {
    id: '2',
    title: 'Marketing Executive',
    description: 'Plan and execute marketing campaigns for our clients across digital and traditional channels.',
    category: 'Marketing',
    tags: ['Digital Marketing', 'Campaign Management', 'Analytics'],
    imageUrl: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    salary: '₹5-7 LPA',
    company: 'BrandMasters',
    location: 'Mumbai',
    interestArea: 'Marketing',
  },
  {
    id: '3',
    title: 'Financial Analyst',
    description: 'Analyze financial data and prepare reports for strategic business decisions.',
    category: 'Finance',
    tags: ['Financial Modeling', 'Data Analysis', 'Reporting'],
    imageUrl: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    salary: '₹10-15 LPA',
    company: 'CashFlow Advisors',
    location: 'Delhi',
    interestArea: 'Finance',
  },
  {
    id: '4',
    title: 'UX Designer',
    description: 'Create intuitive user experiences for web and mobile products through research and design.',
    category: 'Design',
    tags: ['UI/UX', 'Wireframing', 'Prototyping'],
    imageUrl: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    salary: '₹7-10 LPA',
    company: 'Experience First',
    location: 'Hyderabad',
    interestArea: 'Design',
  },
];

const JobsSection: React.FC = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [filters, setFilters] = useState<Record<string, string | string[]>>({});

  const handleFilterChange = (filterKey: string, value: string | string[]) => {
    const newFilters = { ...filters, [filterKey]: value };
    setFilters(newFilters);
    
    // Apply filters
    const filtered = jobs.filter(job => {
      // Check location filter
      if (newFilters.location && job.location !== newFilters.location) {
        return false;
      }
      
      // Check interest area filter
      if (newFilters.interestArea && job.interestArea !== newFilters.interestArea) {
        return false;
      }
      
      // Add salary range filter logic
      
      return true;
    });
    
    setFilteredJobs(filtered);
  };

  return (
    <section id="jobs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Jobs & Career" 
          subtitle="Start your professional journey with opportunities that match your skills and aspirations"
        />
        
        <FilterBar 
          filters={jobFilters} 
          onFilterChange={handleFilterChange} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredJobs.map(job => (
            <ProgramCard 
              key={job.id} 
              program={job}
              type="job"
              additionalInfo={
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Building size={16} className="mr-2" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin size={16} className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <DollarSign size={16} className="mr-2" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Briefcase size={16} className="mr-2" />
                    <span>{job.interestArea}</span>
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

export default JobsSection;