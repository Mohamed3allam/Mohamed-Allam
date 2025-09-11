import React from "react";
import { tech } from "./techs";
import Pie from "./Progress";

const Skills = () => {
  return (
    <section className="skills-section py-5">
      {Object.entries(tech).map(([category, skills]) => (
        <div key={category} className="mb-5">
          <h2 className="fw-bold text-capitalize mb-4">
            {category.replace("_", " ")}
          </h2>

          <div className="d-flex flex-wrap gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="d-flex flex-column align-items-center"
              >
                <Pie
                  colour="#6c757d"
                  percentage={skill.percentage}
                  iconUrl={skill.icon}
                  size={100}
                />
                <span className="mt-2 fw-semibold">{skill.name}</span>

                {skill.frameworks && (
                  <div className="d-flex flex-wrap gap-3 mt-3">
                    {skill.frameworks.map((fw) => (
                      <div
                        key={fw.name}
                        className="d-flex flex-column align-items-center"
                      >
                        <Pie
                          colour="#6c757d"
                          percentage={fw.percentage}
                          iconUrl={fw.icon}
                          size={80}
                        />

                        <small>{fw.name}</small>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
