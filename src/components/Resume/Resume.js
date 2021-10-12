import React from 'react';
import { Link } from 'react-router-dom';
import './resume.css';
import { goTop } from '../../helpers/goTop';

export const Resume = () => {
  return (
    <div className='resume container'>
      <div className='resume__works'>
        <h2>👀 Watch parts of the works that I haved made </h2>
        <Link to='/portfolio' onClick={goTop}>
          Go to portfolio
        </Link>
      </div>
      <div className='resume__document'>
        <h2>Click the button below to get a copy of my resume 👇🏽</h2>
        <a href='https://github.com/cesarionivar/public-resources-online/raw/main/curriculum/CV%20-%20Cesario%20Nivar.pdf'>
          Get the resume
        </a>
      </div>
    </div>
  );
};
