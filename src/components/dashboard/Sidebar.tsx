
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Briefcase, 
  Building, 
  GraduationCap, 
  Globe, 
  BookOpen, 
  Award,
  LogOut
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { icon: Briefcase, label: 'Internships', path: '/dashboard/internships' },
    { icon: Building, label: 'Job Cards', path: '/dashboard/jobs' },
    { icon: GraduationCap, label: 'BootCamps', path: '/dashboard/bootcamps' },
    { icon: BookOpen, label: 'Post Grad', path: '/dashboard/postgrad' },
    { icon: Globe, label: 'Global Programs', path: '/dashboard/global' },
    { icon: Award, label: 'Master Classes', path: '/dashboard/masterclasses' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
              isActive(item.path)
                ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Link>
        ))}
        
        <button
          onClick={logout}
          className="flex items-center w-full px-6 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
