import React, { Fragment } from 'react';

import { Project } from "./style";

const SubSection = () => (
  <Fragment>
    <Project>
      { children }
    </Project>
  </Fragment>
);

export default SubSection;
