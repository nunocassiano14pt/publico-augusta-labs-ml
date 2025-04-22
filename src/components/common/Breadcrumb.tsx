
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
    <div className="breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="breadcrumb-item">
            {item.path ? (
              <Link to={item.path} className="hover:text-gray-800 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800">{item.label}</span>
            )}
          </div>
          {index < items.length - 1 && (
            <ChevronRight size={14} className="breadcrumb-separator" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
