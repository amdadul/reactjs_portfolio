import React from "react";
import Skill from "./Skill";

const Skills = () => {
  const skillData = [
    {
      id: 1,
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript, React, Bootstrap.",
    },
    {
      id: 2,
      title: "Backend Development",
      description: "PHP, Laravel, Node.js, MySQL, PostgreSQL.",
    },
    {
      id: 3,
      title: "DevOps & Cloud",
      description: "Docker, AWS, GitLab CI/CD, Nginx.",
    },
  ];
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center">Skills</h2>
        <div className="row">
          {skillData.map((item) => (
            <Skill skill={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
