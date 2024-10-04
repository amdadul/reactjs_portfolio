import React, { useContext, useEffect } from 'react'
import Project from '../components/Project';
import { TitleContext } from '../context/TitleProvider';

const Projects = () => {

  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle(`Projects - Amdadul Hoque's Portfolio`);
  }, [setTitle]);

    const projectsData = [
        {
          id: 1,
          title: "Project One",
          description: "Description of the project, its goals, and technologies used.",
          url: 1
        },
        {
          id: 2,
          title: "Project Two",
          description: "Description of the project, its goals, and technologies used.",
          url: 2
        },
        {
          id: 3,
          title: "Project Three",
          description: "Description of the project, its goals, and technologies used.",
          url: 3
        },
        {
          id: 4,
          title: "Project Four",
          description: "Description of the project, its goals, and technologies used.",
          url: 4
        },
      ];

  return (
    <section className="bg-light py-5">
        <div className="container">
            <h2 className="text-center">Projects</h2>
            <div className="row">
                {projectsData.map((item)=>(<Project project={item} key={item.id}></Project>))}
            </div>
        </div>
    </section>
  )
}

export default Projects