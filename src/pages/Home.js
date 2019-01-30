import convert from "htmr";
import { string } from 'prop-types';
import React, { Fragment } from 'react';
import { Link, withRouteData, withSiteData} from 'react-static';

import PageTemplate from '../templates/PageTemplate';
import ProjectContainer from '../components/ProjectContainer';

const MainContent = ({ title, welcome }) => (
	<Fragment>
		<h2>Welcome to {title}!</h2>

		<section>{convert(welcome.contents)}</section>
	</Fragment>
);

const AsideContent = ({ posts }) => (
	<Fragment>
		<h3>Blog stuff</h3>

		<ul>
			{ posts.map(post => (
				<li key={ post.slug }>
					<Link to={`/blog/post/${ post.slug }/`}>{ post.title }</Link>
				</li>
			))}
		</ul>
	</Fragment>
);

const Home = ({title, siteUrl, welcome, posts}) => (
	<PageTemplate
		title={siteUrl}
		// fullPage
		main={ <MainContent title={title} welcome={welcome} /> }
		aside={ <AsideContent posts={posts} /> }
	>
		<ProjectContainer />
	</PageTemplate>
);

Home.propTypes = {
	title: string
};

Home.defaultProps = {
	title: ''
};

export default withSiteData(withRouteData(Home));
