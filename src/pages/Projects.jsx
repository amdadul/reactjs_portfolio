import React from 'react'
import Project from '../components/Project';

const Projects = () => {

    const projectsData = [
        {
          id: 1,
          title: "Project One",
          description: "Description of the project, its goals, and technologies used.",
        },
        {
          id: 2,
          title: "Project Two",
          description: "Description of the project, its goals, and technologies used.",
        },
        {
          id: 3,
          title: "Project Three",
          description: "Description of the project, its goals, and technologies used.",
        },
        {
          id: 4,
          title: "Project Four",
          description: "Description of the project, its goals, and technologies used.s",
        },
      ];

  return (
    <section class="bg-light py-5">
        <div class="container">
            <h2 class="text-center">Projects</h2>
            <div class="row">
                {projectsData.map((item)=>(<Project project={item}></Project>))}
            </div>
        </div>
    </section>
  )
}

export default Projects