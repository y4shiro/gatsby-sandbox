import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="m-auto max-w-screen-md bg-red-50">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
