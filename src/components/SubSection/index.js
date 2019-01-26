import React, { Fragment } from 'react';

import { Project, Projects, Section } from "./style";

const SubSection = () => (
  <Fragment>
    <Section>
      <h2>My projects</h2>

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

    </Section>
  </Fragment>
);

export default SubSection;
