import React from "react";

const Skill = ({skill}) => {
  return (
    <div className="col-md-4" key={skill.id}>
      <div className="card shadow-sm mb-4">
        <div className="card-body text-center">
          <h5 className="card-title">{skill.title}</h5>
          <p className="card-text">{skill.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
