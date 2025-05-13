import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <h2 className="text-3xl font-bold text-blue-900 mb-2">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-3 inline-block">
        <div className="h-1 w-24 bg-blue-700 rounded"></div>
        <div className="h-1 w-12 bg-blue-500 rounded mt-1"></div>
      </div>
    </div>
  );
};

export default SectionTitle;