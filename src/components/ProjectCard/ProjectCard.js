import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className='projectCard'>
      <img src={project?.imgUrl} alt='' className='prrojectCard__img' />
      <div className='projectCard__info'>
        <h2 className='projectCard__name'>{project?.name}</h2>
        <p className='projectCard__description'>{project?.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
