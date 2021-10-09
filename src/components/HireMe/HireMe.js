import React from 'react';
import { Link } from 'react-router-dom';
import './hireMe.css';

export const HireMe = () => {
  return (
    <div className='hireMe'>
      <div className='hireMe__logo'>
        <img src='/img/hireMe.svg' alt='Hire Me' />
      </div>
      <div className='hireMe__info'>
        <p>
          If you want to build a website for your bussiness or even for your
          personal use, such as a blogspot, don't wait to long... and hire me ✔
        </p>
        <Link to='contact'>Hire Me 📝</Link>
      </div>
    </div>
  );
};
