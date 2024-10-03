import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {
    const {url} = useParams();
    console.log(url);
    //const [project,setProject] = useState(null);

    /* useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${url}/comments`)  // Example API request
          .then(response => {
            return response.json();
          })
          .then(json => {
            setProject(json);  // Set the project state with fetched data
          })
      }, []);

    console.log(project); */

    const project = {
        title: 'Awesome Web App',
        banner: '/assets/project-banner.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        features: ['Responsive Design', 'User Authentication', 'Real-time Updates'],
        challenges: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        images: ['/assets/project-image1.jpg', '/assets/project-image2.jpg', '/assets/project-image3.jpg'],
        client: 'Example Client',
        date: 'March 2024',
        category: 'Web Development',
        website: 'http://example.com'
      };

      if (!project) {
        return <div>Loading...</div>;
      }

  return (
    <>
      {/* Banner Section */}
      <section className="banner" style={{
        backgroundImage: `url(${project.banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1>{project.title}</h1>
      </section>

      {/* Project Details Section */}
      <div className="container project-details mt-5">
        <div className="row">
          <div className="col-lg-8">
            <h2>Project Overview</h2>
            <p>{project.description}</p>

            <h4>Technologies Used</h4>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            <h4>Features</h4>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h4>Challenges</h4>
            <p>{project.challenges}</p>

            <h4>Project Images</h4>
            <div className="row g-3">
              {project.images.map((image, index) => (
                <div key={index} className="col-md-4">
                  <img src={image} alt={`Project Screenshot ${index + 1}`} className="img-fluid rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="col-lg-4">
            <div className="card mb-3">
              <div className="card-body">
                <h4>Project Info</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Client:</strong> {project.client}</li>
                  <li className="list-group-item"><strong>Date:</strong> {project.date}</li>
                  <li className="list-group-item"><strong>Category:</strong> {project.category}</li>
                  <li className="list-group-item"><strong>Website:</strong> <a href={project.website} target="_blank" rel="noopener noreferrer">{project.website}</a></li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a href="/projects" className="btn btn-primary">Back to Projects</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project