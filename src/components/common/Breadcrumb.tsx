
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex items-center overflow-x-auto whitespace-nowrap text-sm text-gray-500 mb-2">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="breadcrumb-item flex-shrink-0">
            {item.path ? (
              <Link to={item.path} className="hover:text-gray-800 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800">{item.label}</span>
            )}
          </div>
          {index < items.length - 1 && (
            <ChevronRight size={14} className="text-gray-400 mx-2 flex-shrink-0" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
