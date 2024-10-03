import React from 'react'
import Experience from '../components/Experience';

const Experiences = () => {

    const experienceData = [
        {
          id: 1,
          title: "Senior Developer at ABC Company",
          duration: "Jan 2022 - Present",
          description: "eveloped scalable applications and led a team of developers to build high-performance systems.",
        },
        {
          id: 2,
          title: "Software Engineer at XYZ Company",
          duration: "May 2017 - Dec 2019",
          description: "Worked on full-stack development for enterprise solutions using Laravel and React.",
        },
        {
          id: 3,
          title: "Software Engineer at XYZ Company",
          duration: "May 2017 - Dec 2019",
          description: "Worked on full-stack development for enterprise solutions using Laravel and React.",
        },
        {
          id: 4,
          title: "Software Engineer at XYZ Company",
          duration: "May 2017 - Dec 2019",
          description: "Worked on full-stack development for enterprise solutions using Laravel and React.",
        },
      ];

  return (
    <section className="py-5">
        <div className="container">
            <h2 className="text-center">Experience</h2>
            <div className="timeline">
                {experienceData.map((item)=>(
                    <Experience exp={item} key={item.id}></Experience>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Experiences