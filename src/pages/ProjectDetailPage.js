// ProjectDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import img1 from "../images/project1.jpg"

const ProjectDetailPage = () => {
  // console.log(match,"match")
  const { id } = useParams(); // Get project ID from URL parameters
  console.log(id, "id")
  const projects = [
    { id: 1, title: 'Ramavarappadu Project', image: 'project1.jpg', description: 'Description for Project 1' },
    { id: 2, title: 'Nunna Project', image: 'project2.jpg', description: 'Description for Project 2' },
    { id: 3, title: 'Kanuru Project', image: 'project3.jpg', description: 'Description for Project 3' }
  ];
  let project = projects.filter((item) => item.id == id)
  project = project[0]
console.log(project)
  // const projectId = match.params.id; // Assuming you're passing project id via route
  // Fetch project details based on projectId from API or local data
  // const project = { id: id, title: 'Project Title', description: 'Project Description', image: `project${id}.jpg` };

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img width={140} height={140} src={img1} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );


  // return (
  //   <div className="project-detail">
  //     <h2>{project.title}</h2>
  //     <p>{project.description}</p>
  //     <div className="project-images">
  //       {project.images.map((image, index) => (
  //         <img key={index} src={require(`../images/${image}`).default} alt={`Project ${index + 1}`} />
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default ProjectDetailPage;
