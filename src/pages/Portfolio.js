import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

export const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className='works page'>
        <h2 className='page__title'>Portfolio</h2>
      </div>
      <Footer />
    </div>
  );
};
