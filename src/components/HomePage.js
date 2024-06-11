// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectGridItem from './ProjectGridItem';
import '../styles.css';

const projects = [
  { id: 1, title: 'Ramavarappadu Project', image: 'project1.jpg', description: 'Description for Project 1' },
  { id: 2, title: 'Nunna Project', image: 'project2.jpg', description: 'Description for Project 2' },
  { id: 3, title: 'Kanuru Project', image: 'project3.jpg', description: 'Description for Project 3' }
];

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="title-container">
        <h1>Welcome to Vijayawada Properties Website</h1>
      </div>
      <h1>Our Projects</h1>
      <div className="projects-container">
        {projects.map(project => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <ProjectGridItem project={project} />
          </Link>
        ))}
      </div>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Vijayawada Properties</p>
        <p>Name: Praveen Kumar</p>
        <p>Email: example@example.com</p>
        <p>Phone: 8187851656</p>
        {/* You can add more contact information or a contact form here */}
      </div>
    </div>
  );
};

export default HomePage;
