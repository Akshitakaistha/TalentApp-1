import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">Talent</span>
            </div>
            <p className="mb-4 text-blue-100">
              Transforming education and career paths for students nationwide with expert guidance and opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#internships" className="text-blue-100 hover:text-white transition-colors">Internships</a></li>
              <li><a href="#jobs" className="text-blue-100 hover:text-white transition-colors">Jobs & Career</a></li>
              <li><a href="#bootcamps" className="text-blue-100 hover:text-white transition-colors">Bootcamps</a></li>
              <li><a href="#postgrad" className="text-blue-100 hover:text-white transition-colors">Post Graduate Courses</a></li>
              <li><a href="#global" className="text-blue-100 hover:text-white transition-colors">Global Programs</a></li>
              <li><a href="#exam" className="text-blue-100 hover:text-white transition-colors">Entrance Exams</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Career Guidance</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Study Material</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-300 mr-2 mt-0.5" />
                <p className="text-blue-100">D-199, Level-8, Industrial Area, Phase-8B, Mohali</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-300 mr-2" />
                <p className="text-blue-100">+91 9216490490</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-300 mr-2" />
                <p className="text-blue-100">hello@talentapp.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Talent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;