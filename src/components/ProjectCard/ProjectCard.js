import React from 'react';
import './projectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className='projectCard'>
      <img src={project?.imgUrl} alt='' className='prrojectCard__img' />
      <div className='projectCard__info'>
        <h2>{project?.name}</h2>
        <p>{project?.description}</p>
        <a href={project?.previewUrl} target='_blank' rel='noreferrer'>
          Preview
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
