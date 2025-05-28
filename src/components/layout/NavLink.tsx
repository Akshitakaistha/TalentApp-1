
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon: Icon }) => {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors group"
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
};

export default NavLink;
