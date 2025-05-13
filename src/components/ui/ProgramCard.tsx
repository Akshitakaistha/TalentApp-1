import React from 'react';
import { Program } from '../../types';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
  type?: 'internship' | 'job' | 'bootcamp' | 'postgrad' | 'global';
  additionalInfo?: React.ReactNode;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, type, additionalInfo }) => {
  const getBadgeColor = () => {
    switch (type) {
      case 'internship': return 'bg-green-100 text-green-800';
      case 'job': return 'bg-blue-100 text-blue-800';
      case 'bootcamp': return 'bg-purple-100 text-purple-800';
      case 'postgrad': return 'bg-indigo-100 text-indigo-800';
      case 'global': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={program.imageUrl} 
          alt={program.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor()}`}>
            {program.category}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{program.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {program.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Additional Info */}
        {additionalInfo && <div className="mb-4">{additionalInfo}</div>}
        
        {/* CTA Button */}
        <div className="mt-auto">
          <button className="group flex items-center text-blue-700 font-medium hover:text-blue-900 transition-colors">
            Learn more 
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;