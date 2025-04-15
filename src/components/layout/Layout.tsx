
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-cheltenham">
      <Navbar />
      <main className="flex-1 p-6">{children}</main>
      <footer className="bg-white border-t border-gray-200 p-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Público - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
