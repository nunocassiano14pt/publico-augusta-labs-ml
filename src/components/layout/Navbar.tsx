
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart, Users, LineChart, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-16 border-b border-gray-200 px-4 flex items-center justify-between bg-white">
      <div className="flex items-center">
        <Link to="/" className="flex items-center mr-8">
          <img src="public/lovable-uploads/4759fd8c-73c1-4f97-9bff-3e48b566f827.png" alt="IPVC Logo" className="h-8 mr-3" />
          <span className="font-semibold text-xl text-gray-800">Previsão de Abandono Escolar</span>
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
          <Link
            to="/predictions"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/predictions')
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center">
              <BarChart size={18} className="mr-2" />
              Previsões
            </div>
          </Link>
          <Link
            to="/results"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/results')
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center">
              <Users size={18} className="mr-2" />
              Resultados
            </div>
          </Link>
          <Link
            to="/statistics"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/statistics')
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center">
              <LineChart size={18} className="mr-2" />
              Estatísticas
            </div>
          </Link>
        </nav>
      </div>
      <div>
        <span className="text-sm text-teal-dark font-medium">IPVC</span>
      </div>
    </div>
  );
};

export default Navbar;
