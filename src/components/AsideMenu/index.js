import React, { Fragment } from 'react';
import { node } from "prop-types";

import { Aside } from './style';

const AsideMenu = ({ children }) => (
  <Fragment>
    <Aside>
      { children }
    </Aside>
  </Fragment>
);

AsideMenu.propTypes = {
  children: node.isRequired
};

export default AsideMenu;
