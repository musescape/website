import React, { Fragment } from 'react';
import { string } from "prop-types";
import { Link, withSiteData } from "react-static";

import { Header, Logo, ToggleInput, ToggleLabel } from './style';
import NavBar from "../NavBar";

const HeaderBar = ({ title }) => (
  <Fragment>
    <Header>
      <Logo>
        <h1>
          <Link to="#">{ title }</Link>
        </h1>
      </Logo>

      <ToggleInput type="checkbox" id="nav-toggle" />

      <NavBar />

      <ToggleLabel htmlFor="nav-toggle" id="nav-toggle-label">
        <span> </span>
      </ToggleLabel>
    </Header>
  </Fragment>
);

HeaderBar.propTypes = {
  title: string
};

HeaderBar.defaultProps = {
  title: ''
};

export default withSiteData(HeaderBar);
