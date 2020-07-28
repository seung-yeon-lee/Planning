import React from "react";

const ProjectDetail = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title -{id}-</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            molestiae? Corrupti voluptatum alias saepe atque architecto, vel,
            incidunt dolore consequatur delectus nesciunt quisquam earum quae
            esse laboriosam dicta tempore exercitationem.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by My</div>
          <div>DateTime...</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
