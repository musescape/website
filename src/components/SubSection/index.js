import React, { Fragment } from 'react';
import { node } from "prop-types";

import { SectionContainer } from "./style";

const SubSection = ({ children }) => (
  <Fragment>
    <SectionContainer>
      { children }
    </SectionContainer>
  </Fragment>
);

SubSection.propTypes = {
  children: node.isRequired
};

export default SubSection;
