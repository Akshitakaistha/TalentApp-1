import React from 'react';
import { MapPin, Building2, DollarSign, Clock, Users, ExternalLink, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../../App';

interface Job {
  _id: string;
  jobBanner: string;
  industryType: string;
  jobType: string;
  jobName: string;
  description: string;
  skills: string[];
  companyName: string;
  salaryPackage: string;
  location: string;
  companyWebsiteUrl: string;
  workingHours: string;
  jobProfile: string;
  shiftType: string;
  experience: string;
  createdAt: string;
  updatedAt: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
    >
      {/* Header with Banner */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
        {job.jobBanner && (
          <img
            src={`${API_BASE_URL}${job.jobBanner}`}
            alt={job.jobName}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        
        {/* Job Type Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/95 backdrop-blur-sm text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-emerald-100">
            {job.jobType}
          </span>
        </div>

        {/* Industry Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            {job.industryType}
          </span>
        </div>

        {/* Shift Type */}
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
            <Clock size={12} />
            <span>{job.shiftType}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Job Title & Company */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
            {job.jobName}
          </h3>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 size={16} className="text-emerald-500 flex-shrink-0" />
            <span className="text-sm font-medium truncate">{job.companyName}</span>
            {job.companyWebsiteUrl && (
              <ExternalLink size={12} className="text-gray-400 hover:text-emerald-500 cursor-pointer transition-colors flex-shrink-0" />
            )}
          </div>
        </div>

        {/* Key Information */}
        <div className="space-y-3 py-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={14} className="text-red-500" />
              <span className="text-gray-700 font-medium truncate">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <DollarSign size={14} className="text-green-500" />
              <span className="text-gray-700 font-medium">{job.salaryPackage}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Briefcase size={14} className="text-blue-500" />
              <span className="text-gray-700 font-medium truncate">{job.jobProfile}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users size={14} className="text-purple-500" />
              <span className="text-gray-700 font-medium">{job.experience}</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        {job.skills.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Required Skills</h4>
            <div className="flex flex-wrap gap-2">
              {job.skills.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-lg border border-emerald-100 hover:border-emerald-200 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
              {job.skills.length > 3 && (
                <span className="bg-gray-50 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-lg border border-gray-200">
                  +{job.skills.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-gradient-to-r from-[#246CE9] to-[#246CE9] hover:from-[#1f5acc] hover:to-[#1f5acc] text-white font-semibold py-3 rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Apply Now
          </motion.button>
          </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/5 to-teal-400/5" />
      </div>
    </motion.div>
  );
};

export default JobCard;