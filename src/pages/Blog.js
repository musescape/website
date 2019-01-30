import React, { Fragment } from 'react';
import { withRouteData, Link } from 'react-static';

import PageTemplate from '../templates/PageTemplate';

const MainContent = ({ posts }) => (
	<Fragment>
		<div>
			<h1>It's blog time.</h1>
			<br />
			All Posts:
			<ul>
				{ posts.map(post => (
					<li key={ post.slug }>
						<Link to={`/blog/post/${ post.slug }/`}>{ post.title }</Link>
					</li>
				))}
			</ul>
		</div>
	</Fragment>
);

export default withRouteData(({ posts }) => (
		<PageTemplate
			title={'testing'}
			// fullPage
			main={ <MainContent posts={ posts } /> }
			// aside={ <AsideContent posts={ posts } /> }
		>
		</PageTemplate>
	)
)
