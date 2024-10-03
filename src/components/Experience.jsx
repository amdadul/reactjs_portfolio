import React from "react";

const Experience = ({exp}) => {
  return (
    <div className="timeline-item" key={exp.id}>
      <h5>{exp.title}</h5>
      <p>
        <strong>{exp.duration}</strong>
      </p>
      <p>
        {exp.description}
      </p>
    </div>
  );
};

export default Experience;
