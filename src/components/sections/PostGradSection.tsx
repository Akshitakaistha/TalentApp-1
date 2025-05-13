import React, { useState } from 'react';
import { Award, Clock, CreditCard } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import FilterBar from '../ui/FilterBar';
import ProgramCard from '../ui/ProgramCard';
import { PostGradCourse } from '../../types';

// Sample data
const postGradFilters = {
  type: {
    label: 'Program Type',
    options: [
      { id: 'certificate', label: 'Certificate', value: 'certificate' },
      { id: 'diploma', label: 'Diploma', value: 'diploma' },
      { id: 'masters', label: 'Masters Degree', value: 'masters' },
    ],
    type: 'radio',
  },
  duration: {
    label: 'Duration',
    options: [
      { id: '6-12', label: '6-12 Months', value: '6-12 Months' },
      { id: '1-2', label: '1-2 Years', value: '1-2 Years' },
      { id: '2+', label: '2+ Years', value: '2+ Years' },
    ],
    type: 'dropdown',
  },
};

const postGradCourses: PostGradCourse[] = [
  {
    id: '1',
    title: 'Post Graduate Certificate in Data Science',
    description: 'Advanced certification program focusing on data analysis, machine learning, and AI applications.',
    category: 'Data Science',
    tags: ['AI', 'Python', 'Machine Learning'],
    imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'certificate',
    duration: '6-12 Months',
    fee: '₹150,000',
    emiDetails: 'EMI starting at ₹5,000/month at 0% interest',
  },
  {
    id: '2',
    title: 'Post Graduate Diploma in Digital Marketing',
    description: 'Comprehensive program covering all aspects of digital marketing with practical industry projects.',
    category: 'Marketing',
    tags: ['SEO', 'Social Media', 'PPC'],
    imageUrl: 'https://images.pexels.com/photos/7947303/pexels-photo-7947303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'diploma',
    duration: '1-2 Years',
    fee: '₹200,000',
    emiDetails: 'EMI starting at ₹8,000/month at 0% interest',
  },
  {
    id: '3',
    title: 'Master of Business Administration (MBA)',
    description: 'AICTE approved MBA program with specializations in Finance, Marketing, HR, and Operations.',
    category: 'Management',
    tags: ['Business', 'Leadership', 'Strategy'],
    imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'masters',
    duration: '2+ Years',
    fee: '₹500,000',
    emiDetails: 'EMI starting at ₹12,000/month at 0% interest',
  },
  {
    id: '4',
    title: 'PG Certificate in Cyber Security',
    description: 'Industry-focused program on network security, ethical hacking, and security management.',
    category: 'IT Security',
    tags: ['Network Security', 'Ethical Hacking', 'Risk Management'],
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'certificate',
    duration: '6-12 Months',
    fee: '₹180,000',
    emiDetails: 'EMI starting at ₹6,000/month at 0% interest',
  },
];

const PostGradSection: React.FC = () => {
  const [filteredCourses, setFilteredCourses] = useState<PostGradCourse[]>(postGradCourses);
  const [filters, setFilters] = useState<Record<string, string | string[]>>({});

  const handleFilterChange = (filterKey: string, value: string | string[]) => {
    const newFilters = { ...filters, [filterKey]: value };
    setFilters(newFilters);
    
    // Apply filters
    const filtered = postGradCourses.filter(course => {
      // Check type filter
      if (newFilters.type && course.type !== newFilters.type) {
        return false;
      }
      
      // Check duration filter
      if (newFilters.duration && course.duration !== newFilters.duration) {
        return false;
      }
      
      return true;
    });
    
    setFilteredCourses(filtered);
  };

  return (
    <section id="postgrad" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Post Graduate Courses" 
          subtitle="100% Job Assurance Programs with 0% Interest EMI Plans"
        />
        
        <FilterBar 
          filters={postGradFilters} 
          onFilterChange={handleFilterChange} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map(course => (
            <ProgramCard 
              key={course.id} 
              program={course}
              type="postgrad"
              additionalInfo={
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Award size={16} className="mr-2" />
                    <span>
                      {course.type === 'certificate' ? 'Certificate Program' : 
                       course.type === 'diploma' ? 'Diploma Program' : 'Masters Degree'}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock size={16} className="mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CreditCard size={16} className="mr-2" />
                    <span>{course.emiDetails}</span>
                  </div>
                </div>
              }
            />
          ))}
        </div>
        
        {/* 100% Job Guarantee Banner */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-2">100% Job Assurance Guarantee</h3>
          <p className="text-blue-700 mb-4">All our post-graduate programs come with placement assistance and job guarantees.</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-full transition-colors">
            Learn About Our Placement Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default PostGradSection;