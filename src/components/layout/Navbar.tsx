
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-16 border-b border-gray-200 px-4 flex items-center justify-between bg-[#e3000f]">
      <div className="flex items-center">
        <Link to="/" className="flex items-center mr-8">
          <img 
            src="/lovable-uploads/2781a604-204d-4870-b838-486600f9ea89.png" 
            alt="Público Logo" 
            className="h-10 mr-3"
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
                ? 'bg-[#c20008] text-white'
                : 'text-white hover:bg-[#c20008]/70'
            }`}
          >
            <div className="flex items-center">
              <Home size={18} className="mr-2" />
              Dashboard
            </div>
          </Link>
        </nav>
      </div>
      {/* Removed the "Público" text from here */}
    </div>
  );
};

export default Navbar;
