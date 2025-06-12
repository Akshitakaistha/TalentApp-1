import React from 'react';
import { Building, DollarSign, Clock, MapPin, ArrowRight } from 'lucide-react';
import { API_BASE_URL } from '../../App';
interface InternshipCardProps {
  internship: {
    _id: string;
    internshipBanner: string;
    domain: string;
    jobType: string;
    internshipName: string;
    description: string;
    skills: string[];
    companyName: string;
    stipend: string;
    duration: string;
    location: string;
    workingHours: string;
    jobProfile: string;
    shiftType: string;
  };
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship }) => {
  return (
    <div
  className="relative bg-white/90 backdrop-blur-lg rounded-3xl border border-gray-200 shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] group w-full max-w-xl mx-auto"
>
      <div className="relative h-52 overflow-hidden">
        <img
          src={`${API_BASE_URL}${internship.internshipBanner}`}
          alt={internship.internshipName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
          {internship.domain}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          {internship.internshipName}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed truncate">
          {internship.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {internship.skills?.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm transition-transform duration-200 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Building size={16} className="text-blue-600" />
            {internship.companyName}
          </div>
          <div className="flex items-center gap-2">
            <DollarSign size={16} className="text-green-600" />
            {internship.stipend}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-yellow-600" />
            {internship.duration}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-red-600" />
            {internship.location}
          </div>
        </div>

        {/* Button */}
        <div className="pt-2">
          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-all duration-200 group">
            Learn More
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
