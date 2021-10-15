import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';

export const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className='works'>
        <h2 className='page__title'>Portfolio</h2>
        <Projects />
      </div>
      <Footer />
    </div>
  );
};
