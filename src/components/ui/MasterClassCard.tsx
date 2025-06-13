import React from 'react';
import { MapPin, Calendar, User, ArrowRight, Star, Users, Target, Play } from 'lucide-react';
import { motion } from 'framer-motion';

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

interface MasterClassCardProps {
  masterClass: MasterClass;
}

const MasterClassCard: React.FC<MasterClassCardProps> = ({ masterClass }) => {
  const formattedDate = new Date(masterClass.date).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full max-w-sm mx-auto overflow-hidden border border-gray-100"
    >
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-purple-600 transition-colors duration-300">
            {masterClass.masterClassName}
          </h2>
          
          {/* Speaker */}
          <div className="flex items-center gap-2 text-gray-600">
            <User size={14} className="text-purple-500" />
            <span className="text-sm font-medium">{masterClass.keynoteSpeaker}</span>
          </div>
        </div>

        {/* Date & Location */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-green-500" />
            <span className="font-medium">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-red-500" />
            <span className="font-medium">{masterClass.location}</span>
          </div>
        </div>

        {/* Goal */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <Target size={14} className="text-purple-600" />
            <span className="text-purple-800 font-bold text-sm">Learning Goal</span>
          </div>
          <p className="text-purple-700 text-xs">{masterClass.goal}</p>
        </div>

        {/* Skills */}
        {masterClass.skills.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Key Topics</h3>
            <div className="flex flex-wrap gap-2">
              {masterClass.skills.slice(0, 4).map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 text-xs font-medium px-3 py-1.5 rounded-xl border border-purple-100 hover:border-purple-200 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
              {masterClass.skills.length > 4 && (
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-xl">
                  +{masterClass.skills.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:to-pink-700 text-white font-semibold py-3.5 rounded-2xl text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group/btn"
        >
          <span>Join Master Class</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </motion.button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/10 to-pink-400/10" />
      </div>
    </motion.div>
  );
};

export default MasterClassCard;