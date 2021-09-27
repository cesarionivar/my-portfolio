import React from 'react';
import { Link } from 'react-router-dom';

export const NoMatch = () => {
  return (
    <div className='noMatch'>
      <img src='/img/NoMatch.png' alt='No Match' />
      <h2>Error 404, resource not found!!!</h2>
      <Link to='/' className='btn-back'>
        Go back &nbsp;<i class='fas fa-undo'></i>
      </Link>
    </div>
  );
};
