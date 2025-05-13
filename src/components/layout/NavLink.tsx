import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, label, href, mobile }) => {
  return (
    <a 
      href={href}
      className={`
        flex items-center transition-all duration-200
        ${mobile 
          ? 'text-blue-800 hover:text-blue-600 text-lg py-2' 
          : 'text-blue-800 hover:text-blue-600 font-medium'}
      `}
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </a>
  );
};

export default NavLink;