
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 p-6">{children}</main>
      <footer className="bg-white border-t border-gray-200 p-4 text-center">
        <div className="max-w-7xl mx-auto">
          <img 
            src="/lovable-uploads/94ead842-b713-43ea-af15-0f4a0b0d862d.png" 
            alt="Logos financiamento" 
            className="h-16 mx-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.error("Erro ao carregar imagem:", target.src);
              target.src = "/placeholder.svg";
            }}
          />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
