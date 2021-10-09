import React from 'react';
import { Link } from 'react-router-dom';
import './resume.css';

export const Resume = () => {
  return (
    <div className='resume container'>
      <div className='resume__works'>
        <h2>👀 Watch parts of the works that I haved made </h2>
        <Link to='/works'>Go to works</Link>
      </div>
      <div className='resume__document'>
        <h2>Click the button below to get a copy of my resume 👇🏽</h2>
        <a href='#'>Get the resume</a>
      </div>
    </div>
  );
};
