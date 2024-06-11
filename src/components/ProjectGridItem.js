// ProjectGridItem.js
import React from 'react';
import img1 from "../images/project1.jpg"

const ProjectGridItem = ({ project }) => {
  console.log(project,"Project")
  return (
    <div className="project-item">
      {/* <img src={require(`../images/${project.image}`).default} alt={project.title} /> */}
      <img src= {img1} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectGridItem;
