import convert from 'htmr';
import React, { Fragment } from 'react';
import { withRouteData, Link } from 'react-static';

import PageTemplate from '../templates/PageTemplate';

export default withRouteData(({ post }) => (
  <PageTemplate
    title={ post.title }
    // fullPage
    main={(
    <Fragment>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <h3>{ post.title }</h3>
      { convert(post.contents) }
    </Fragment>
  )}
/>
))
