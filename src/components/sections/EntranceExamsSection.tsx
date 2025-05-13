import React, { useState, useEffect, useRef } from 'react';
import { FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface ExamCategory {
  id: string;
  title: string;
  exams: {
    id: string;
    name: string;
    description: string;
    dates: string;
    website: string;
  }[];
}

const examCategories: ExamCategory[] = [
  {
    id: 'iit-jam',
    title: 'IIT JAM',
    exams: [
      {
        id: 'jam-1',
        name: 'IIT Joint Admission Test for M.Sc.',
        description: 'A national level entrance exam for admission to M.Sc., Joint M.Sc.-Ph.D., M.Sc.-Ph.D. Dual Degree programs at IITs and integrated Ph.D. programs at IISc.',
        dates: 'February (annually)',
        website: 'https://jam.iitd.ac.in/',
      }
    ]
  },
  {
    id: 'nimcet',
    title: 'NIMCET',
    exams: [
      {
        id: 'nimcet-1',
        name: 'NIT MCA Common Entrance Test',
        description: 'National level entrance exam for admission to MCA programs at NITs and other participating institutes.',
        dates: 'May-June (annually)',
        website: 'https://nimcet.in/',
      }
    ]
  },
  {
    id: 'mba',
    title: 'CAT/MAT/XAT/SNAP/CMAT',
    exams: [
      {
        id: 'cat',
        name: 'Common Admission Test (CAT)',
        description: 'Prestigious entrance exam for admission to IIMs and other top business schools in India.',
        dates: 'November-December (annually)',
        website: 'https://iimcat.ac.in/',
      },
      {
        id: 'mat',
        name: 'Management Aptitude Test (MAT)',
        description: 'National level entrance exam for admission to MBA/PGDM programs at participating institutes.',
        dates: 'February, May, September, December',
        website: 'https://mat.aima.in/',
      }
    ]
  },
  {
    id: 'cuet',
    title: 'CUET PG',
    exams: [
      {
        id: 'cuet-pg',
        name: 'Common University Entrance Test (PG)',
        description: 'Unified entrance exam for admission to postgraduate programs at central universities and other participating institutions.',
        dates: 'June (annually)',
        website: 'https://cuet.nta.nic.in/',
      }
    ]
  }
];

const EntranceExamsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const navigateCarousel = (index: number) => {
    setActiveIndex(index);
  };

  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex === examCategories.length - 1 ? 0 : prevIndex + 1));
  };

  const prevItem = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? examCategories.length - 1 : prevIndex - 1));
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextItem();
    }
    if (isRightSwipe) {
      prevItem();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextItem();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="exam" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Entrance Exams after Graduation" 
          subtitle="Prepare for these important exams to pursue higher education opportunities"
        />
        
        <div className="relative mt-8 bg-blue-50 rounded-xl p-6 overflow-hidden"
             ref={carouselRef}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}>
          
          {/* Carousel Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-white rounded-full shadow-sm">
              {examCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => navigateCarousel(index)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    activeIndex === index 
                      ? 'bg-blue-700 text-white shadow-sm' 
                      : 'text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Carousel Content */}
          <div className="relative">
            {examCategories.map((category, index) => (
              <div 
                key={category.id}
                className={`transition-opacity duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <FileText className="mr-2 text-blue-700" size={20} />
                    {category.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.exams.map(exam => (
                      <div key={exam.id} className="border-b border-gray-200 pb-4 last:border-0">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{exam.name}</h4>
                        <p className="text-gray-600 mb-3">{exam.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Exam Dates: </span>
                            <span className="text-gray-600">{exam.dates}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Official Website: </span>
                            <a href={exam.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              Visit Website
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevItem}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-700 hover:bg-blue-50 z-10"
            aria-label="Previous exam"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextItem}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-blue-700 hover:bg-blue-50 z-10"
            aria-label="Next exam"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {examCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateCarousel(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-blue-700 w-6' : 'bg-blue-300 hover:bg-blue-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntranceExamsSection;