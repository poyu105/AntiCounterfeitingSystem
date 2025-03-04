import React from 'react';
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pageheader from './components/PageHeader';

function App() {
  return (
    <div className=" min-vh-100">
      <Navbar/>
      <Pageheader/>
      <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;