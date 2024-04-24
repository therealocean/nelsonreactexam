import { useState } from "react";
// import Project1 from "./Project1";
import { Link } from "react-router-dom";


const Home = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    
    const projectsPerPage = 3;

  const projects = [
    { id: 1, name: 'Project 1', link: "project1" },
    { id: 2, name: 'Project 2', link: 'project2' },
    { id: 3, name: 'Project 3', link: 'project3' },
    { id: 4, name: 'Project 4', link: 'project4' },
    { id: 5, name: 'Project 5', link: 'project5' },
    { id: 6, name: 'Project 6', link: 'project6' },
  ];

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jumbo Nelson Ogah</h1>
        <p>
          I am currently undergoing training at AltSchool in SOE. 
        </p>
        <p>I am passionate about becoming a Front-end Engineer that solves real-world problems.
        </p>
      </header>
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          {currentProjects.map((project) => (
            <li key={project.id}>
              <Link to={project.link}>{project.name}</Link>
            </li>
          ))}
        </ul>
        <div className="pagination">
          {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }, (_, i) => i + 1).map(
            (page) => (
              <button key={page} onClick={() => paginate(page)}>{page}</button>
            )
          )}
          
        </div>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
        </ul>
      </section>
      <section className="App-link">
        <a
          href="https://www.linkedin.com/in/nelson-jumbo-896306274/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on LinkedIn
        </a>
      </section>
      <section className="App-link">
        <a
          href="https://github.com/therealocean"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my Github
        </a>
      </section>
    </div>
  )
}

export default Home;