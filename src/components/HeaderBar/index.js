import React, { Fragment } from 'react';
import { string } from "prop-types";
import { Link, withSiteData } from "react-static";

import { Header, Logo } from './style';

const HeaderBar = ({ title }) => (
  <Fragment>
    <Header>
      <Logo>
        <h1><Link to="#">{ title }</Link></h1>
      </Logo>
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
