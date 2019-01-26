import React, { Fragment } from 'react';
import { string } from 'prop-types';
import { withSiteData } from 'react-static';

import { Footer } from './style';

const FooterBar = ({ siteUrl }) => (
  <Fragment>
    <Footer>
      <p>
        &copy; 2019 { siteUrl }. All rights reserved.
      </p>
    </Footer>
  </Fragment>
);

FooterBar.propTypes = {
  siteUrl: string
};

FooterBar.defaultProps = {
  siteUrl: ''
};

export default withSiteData(FooterBar);
