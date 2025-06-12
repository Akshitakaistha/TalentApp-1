/**
 * Function is used to create the sidebar for the dashboard.
 */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Briefcase,
  Building,
  GraduationCap,
  Globe,
  BookOpen,
  Award,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { logout } = useAuth();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

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
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-screen min-h-screen w-[260px] bg-white border-r shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:z-10`}
      >
        <div className="px-6 py-5 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-blue-600 tracking-tight">
            Admin Dashboard
          </h2>
          <button onClick={closeSidebar} className="md:hidden text-gray-500">
            <X />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-all duration-150 rounded-r-full ${
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-700'
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-4 border-t">
          <button
            onClick={logout}
            className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-all rounded-md"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

