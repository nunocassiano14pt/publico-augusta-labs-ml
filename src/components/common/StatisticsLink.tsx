
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2 } from 'lucide-react';

interface StatisticsLinkProps {
  to: string;
  label: string;
  className?: string;
}

const StatisticsLink: React.FC<StatisticsLinkProps> = ({ to, label, className = '' }) => {
  return (
    <Link 
      to={to} 
      className={`flex items-center text-sm font-medium text-teal-dark hover:text-teal transition-colors ${className}`}
    >
      <BarChart2 size={16} className="mr-1" />
      {label}
    </Link>
  );
};

export default StatisticsLink;
