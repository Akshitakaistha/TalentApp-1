import React, { useState } from 'react';
import { Award, Calendar, Globe, Clock, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface ExamInfo {
  id: string;
  title: string;
  description: string;
  eligibility: string;
  nextExamDate: string;
  preparationTime: string;
  website: string;
}

interface ExamCategory {
  id: string;
  title: string;
  exams: ExamInfo[];
}

const examCategories: ExamCategory[] = [
  {
    id: 'upsc',
    title: 'UPSC Civil Services',
    exams: [
      {
        id: 'upsc-cse',
        title: 'Civil Services Examination',
        description: 'One of the most prestigious exams in India for recruitment to various Civil Services like IAS, IPS, IFS, etc.',
        eligibility: 'Graduate in any discipline',
        nextExamDate: 'May-June (Prelims), September (Mains)',
        preparationTime: '12-18 months',
        website: 'https://upsc.gov.in/',
      }
    ]
  },
  {
    id: 'gate',
    title: 'GATE (Graduate Aptitude Test in Engineering)',
    exams: [
      {
        id: 'gate-exam',
        title: 'GATE Examination',
        description: 'National level exam for admission to M.Tech programs and recruitment in PSUs.',
        eligibility: 'B.E/B.Tech or final year students',
        nextExamDate: 'February',
        preparationTime: '6-12 months',
        website: 'https://gate.iitd.ac.in/',
      }
    ]
  },
  {
    id: 'ssc',
    title: 'SSC (Staff Selection Commission)',
    exams: [
      {
        id: 'ssc-cgl',
        title: 'Combined Graduate Level Examination',
        description: 'For recruitment to various Group B and Group C posts in government departments.',
        eligibility: 'Graduate in any discipline',
        nextExamDate: 'Throughout the year',
        preparationTime: '6-9 months',
        website: 'https://ssc.nic.in/',
      }
    ]
  },
  {
    id: 'ugc-net',
    title: 'UGC NET',
    exams: [
      {
        id: 'ugc-net-exam',
        title: 'National Eligibility Test',
        description: 'For determining eligibility for lectureship and JRF in Indian universities and colleges.',
        eligibility: 'Post-graduate with minimum 55% marks',
        nextExamDate: 'June and December',
        preparationTime: '4-6 months',
        website: 'https://ugcnet.nta.nic.in/',
      }
    ]
  },
  {
    id: 'state',
    title: 'State Civil Services',
    exams: [
      {
        id: 'state-pcs',
        title: 'State Public Service Commission Exams',
        description: 'State-level civil services examinations for recruitment to various administrative posts.',
        eligibility: 'Graduate in any discipline',
        nextExamDate: 'Varies by state',
        preparationTime: '8-12 months',
        website: 'Varies by state',
      }
    ]
  }
];

const CompetitiveExamsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(examCategories[0].id);

  const selectedCategory = examCategories.find(category => category.id === activeCategory) || examCategories[0];

  return (
    <section id="competitive" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Competitive Exams" 
          subtitle="Prepare for Government & Public Sector jobs through these competitive examinations"
        />
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tabs Navigation */}
          <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200">
            {examCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'border-b-2 border-blue-700 text-blue-700'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {selectedCategory.exams.map(exam => (
              <div key={exam.id} className="mb-8 last:mb-0">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="flex-1 md:pr-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{exam.title}</h3>
                    <p className="text-gray-700 mb-4">{exam.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-start">
                        <Award className="text-blue-700 mt-1 mr-3 flex-shrink-0" size={18} />
                        <div>
                          <span className="block text-sm font-medium text-gray-900">Eligibility</span>
                          <span className="text-gray-700">{exam.eligibility}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Calendar className="text-blue-700 mt-1 mr-3 flex-shrink-0" size={18} />
                        <div>
                          <span className="block text-sm font-medium text-gray-900">Next Exam Date</span>
                          <span className="text-gray-700">{exam.nextExamDate}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="text-blue-700 mt-1 mr-3 flex-shrink-0" size={18} />
                        <div>
                          <span className="block text-sm font-medium text-gray-900">Preparation Time</span>
                          <span className="text-gray-700">{exam.preparationTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Globe className="text-blue-700 mt-1 mr-3 flex-shrink-0" size={18} />
                        <div>
                          <span className="block text-sm font-medium text-gray-900">Official Website</span>
                          <a 
                            href={exam.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center text-blue-700 font-medium hover:text-blue-900">
                      View Preparation Resources
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveExamsSection;