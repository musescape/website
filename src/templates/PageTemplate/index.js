import { Head } from 'react-static';
import React, { Fragment } from 'react';
import { node, bool, string } from 'prop-types';
import { injectGlobal } from 'styled-components';

import { globalStyles } from '../../theme';
import HeaderBar from '../../components/HeaderBar';
import AsideMenu from '../../components/AsideMenu';
import SubSection from '../../components/SubSection';
import FooterBar from '../../components/FooterBar';
import { Page, PageFullContent, PageNoSideBar, Main } from './style';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
	${globalStyles}
`;

const PageTemplate = ({title, fullPage, main, aside, children, ...props}) => {
  if (!aside) {
    return (
      <Fragment>
        <Head>
          <title>{title}</title>
        </Head>

        <PageNoSideBar {...props}>
          <HeaderBar />

          { main && (
            <Main>
              { main }
            </Main>
          )}

          { children && (
            <SubSection>
              { children }
            </SubSection>
          )}

          <FooterBar />
        </PageNoSideBar>
      </Fragment>
    )
  }

  if (fullPage && aside) {
    return (
      <Fragment>
        <Head>
          <title>{title}</title>
        </Head>

        <PageFullContent {...props}>
          <HeaderBar />

          { main && (
            <Main>
              { main }
            </Main>
          )}

          { aside && (
            <AsideMenu>
              { aside }
            </AsideMenu>
          )}

          { children && (
            <SubSection>
              { children }
            </SubSection>
          )}

          <FooterBar />
        </PageFullContent>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <Page {...props}>
        <HeaderBar />

        { main && (
          <Main>
            { main }
          </Main>
        )}

        { aside && (
          <AsideMenu>
            { aside }
          </AsideMenu>
        )}

        { children && (
          <SubSection>
            { children }
          </SubSection>
        )}

        <FooterBar />
      </Page>
    </Fragment>
  )
};

PageTemplate.propTypes = {
  title: string.isRequired,
  fullPage: bool,
  aside: node,
  main: node,
  children: node,
};

export default PageTemplate;

