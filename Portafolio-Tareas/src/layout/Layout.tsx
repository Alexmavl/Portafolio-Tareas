// src/layout/Layout.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Remove the SidebarProps import

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`layout-container ${isSidebarOpen ? 'with-sidebar-open' : ''}`}>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;