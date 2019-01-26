import React, { Fragment } from 'react';
import { string } from "prop-types";
import { Link, withSiteData } from "react-static";

import { Header, Logo } from './style';
import NavBar from "../NavBar";

const HeaderBar = ({ title }) => (
  <Fragment>
    <Header>
      <Logo>
        <h1><Link to="#">{ title }</Link></h1>
      </Logo>

      <NavBar />
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
