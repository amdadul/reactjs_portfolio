import React from "react";
import { NavLink } from "react-router-dom";

const Project = ({project}) => {
  return (
    <div className="col-md-6" key={project.id}>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">
            {project.description}
          </p>
          <NavLink to={`/project/${project.url}`} className="btn btn-primary">
            View Project
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Project;
