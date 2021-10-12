import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

import Data from '../../services/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(Data.projects);
  }, [setProjects]);

  return (
    <div className='projects'>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
