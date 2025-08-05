// src/layout/Layout.tsx
import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ marginLeft: '220px', padding: '2rem', width: '100%' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
