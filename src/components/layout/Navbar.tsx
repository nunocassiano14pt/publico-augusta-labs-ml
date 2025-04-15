
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-16 border-b border-gray-200 px-4 flex items-center justify-between bg-white">
      <div className="flex items-center">
        <Link to="/" className="flex items-center mr-8">
          <img 
            src="/lovable-uploads/c087dc34-39da-4d76-a3a1-92a29b142bf7.png" 
            alt="Público Logo" 
            className="h-8 mr-3"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.error("Erro ao carregar imagem:", target.src);
              target.src = "/placeholder.svg";
            }}
          />
        </Link>
        <nav className="flex space-x-1">
          <Link
            to="/"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/') && location.pathname === '/'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center">
              <Home size={18} className="mr-2" />
              Dashboard
            </div>
          </Link>
        </nav>
      </div>
      <div>
        <span className="text-sm text-publico font-medium">Público</span>
      </div>
    </div>
  );
};

export default Navbar;
