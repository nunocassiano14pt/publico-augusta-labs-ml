
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
          <img src="https://lovable-uploads.s3.amazonaws.com/9c9ef711-2988-4eb2-b136-3e83df55e905.png" alt="Logos" className="h-10 mx-auto" />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
