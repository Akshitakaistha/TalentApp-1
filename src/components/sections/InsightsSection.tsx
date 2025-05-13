import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { TrendingUp, Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Rise of Data Science: Career Prospects in 2025',
    excerpt: 'Explore the growing field of data science and the lucrative career paths available for graduates.',
    content: '',
    category: 'Career Insights',
    author: 'Dr. Sharma',
    date: 'May 15, 2025',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'Why Soft Skills Matter in the Age of Automation',
    excerpt: 'Learn why soft skills like communication and leadership are becoming more valuable as automation increases.',
    content: '',
    category: 'Skill Development',
    author: 'Priya Mehta',
    date: 'April 28, 2025',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: 'Global Education Trends Reshaping Higher Learning',
    excerpt: 'Discover how international education is evolving and creating new opportunities for students worldwide.',
    content: '',
    category: 'Global Education',
    author: 'Rahul Kapoor',
    date: 'April 10, 2025',
    imageUrl: 'https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

// Trending career fields
const trendingFields = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    growth: '+45% YoY job growth',
    description: 'Developing algorithms and models that enable computers to learn from data and make intelligent decisions.',
  },
  {
    title: 'Sustainability & Environmental Management',
    growth: '+38% YoY job growth',
    description: 'Leading initiatives to reduce environmental impact and develop sustainable business practices.',
  },
  {
    title: 'Healthcare Technology',
    growth: '+32% YoY job growth',
    description: 'Creating innovative technologies and software solutions to improve healthcare delivery and patient outcomes.',
  },
  {
    title: 'Digital Marketing & E-commerce',
    growth: '+28% YoY job growth',
    description: 'Leveraging digital channels and data analytics to drive business growth and customer engagement.',
  },
];

const InsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Top Insights & Current Trends" 
          subtitle="Stay informed about the latest developments in education and career opportunities"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
              <Clock size={20} className="mr-2 text-blue-700" />
              Latest Articles
            </h3>
            
            <div className="space-y-8">
              {blogPosts.map(post => (
                <div key={post.id} className="group">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <div className="md:col-span-1 overflow-hidden rounded-lg">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-center mb-2 text-xs text-gray-500">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="ml-2 flex items-center">
                          <User size={12} className="mr-1" />
                          {post.author}
                        </span>
                        <span className="ml-2 flex items-center">
                          <Clock size={12} className="mr-1" />
                          {post.date}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {post.title}
                      </h4>
                      
                      <p className="text-gray-600 mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <a href="#" className="text-blue-700 font-medium hover:text-blue-900 inline-flex items-center">
                        Read more
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-6 py-2 rounded-full font-medium transition-colors">
                View All Articles
              </button>
            </div>
          </div>
          
          {/* Trending Career Fields */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
              <TrendingUp size={20} className="mr-2 text-blue-700" />
              Trending Career Fields
            </h3>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="space-y-6">
                {trendingFields.map((field, index) => (
                  <div key={index} className="border-b border-blue-100 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 mb-1">{field.title}</h4>
                    <p className="text-green-600 text-sm font-medium mb-2">{field.growth}</p>
                    <p className="text-gray-600 text-sm">{field.description}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 w-full bg-blue-700 text-white hover:bg-blue-800 py-2 rounded-lg font-medium transition-colors">
                Download Career Trends Report
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-8 bg-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Education Quick Stats</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Graduate Employment Rate</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Higher Education Pursuit</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Skills Gap Reduction</span>
                    <span className="font-medium">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;