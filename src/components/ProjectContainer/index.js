import React, { Fragment } from 'react';

import { ProjectContainer as Projects, ProjectHeading } from "./style";
import ProjectItem from '../ProjectItem';

const ProjectContainer = () => (
  <Fragment>
    <ProjectHeading>My projects</ProjectHeading>

    <Projects>
      <ProjectItem>
        <img src="https://via.placeholder.com/150x150" alt="placeholder image 1" />
      </ProjectItem>

      <ProjectItem>
        <img src="https://via.placeholder.com/200x150" alt="placeholder image 2" />
      </ProjectItem>

      <ProjectItem>
        <img src="https://via.placeholder.com/100x200" alt="placeholder image 3" />
      </ProjectItem>

      <ProjectItem>
        <img src="https://via.placeholder.com/100x100" alt="placeholder image 4" />
      </ProjectItem>

      <ProjectItem>
        <img src="https://via.placeholder.com/200x200" alt="placeholder image 5" />
      </ProjectItem>
    </Projects>
  </Fragment>
);

export default ProjectContainer;
