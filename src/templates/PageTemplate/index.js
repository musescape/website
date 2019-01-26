import React from 'react';
import { node } from 'prop-types';
import { injectGlobal } from 'styled-components';

import { globalStyles } from '../../theme';
import { Page, Main } from './style';
import HeaderBar from '../../components/HeaderBar';
import AsideMenu from '../../components/AsideMenu';
import SubSection from '../../components/SubSection';
import FooterBar from '../../components/FooterBar';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
	${globalStyles}
`;

const PageTemplate = ({children, ...props}) => (
  <Page {...props}>
    <HeaderBar />

    <Main>
      { children }
    </Main>

    <AsideMenu />

    <SubSection />

    <FooterBar />
  </Page>
);

PageTemplate.propTypes = {
  children: node.isRequired
};

export default PageTemplate;

