import React, { Fragment } from 'react';

import { Projects } from "./style";
import Project from '../Project';

const SubSection = () => (
  <Fragment>
    <Projects>
      <Project>
        <img src="https://via.placeholder.com/150x150"/>
      </Project>

      <Project>
        <img src="https://via.placeholder.com/200x150"/>
      </Project>

      <Project>
        <img src="https://via.placeholder.com/100x200"/>
      </Project>

      <Project>
        <img src="https://via.placeholder.com/100x100"/>
      </Project>

      <Project>
        <img src="https://via.placeholder.com/200x200"/>
      </Project>
    </Projects>
  </Fragment>
);

export default SubSection;
