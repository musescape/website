import React, { Fragment } from 'react';
import { node } from "prop-types";

import { ProjectItem as Project } from "./style";

const ProjectItem = ({ children }) => (
  <Fragment>
    <Project>
      { children }
    </Project>
  </Fragment>
);

ProjectItem.propTypes = {
  children: node.isRequired
};

export default ProjectItem;
