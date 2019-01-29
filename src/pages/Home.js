import React, {Fragment} from 'react';
import { string } from 'prop-types';
import { withSiteData } from 'react-static';

import PageTemplate from '../templates/PageTemplate';
import ProjectContainer from '../components/ProjectContainer';

const MainContent = ({ title }) => (
	<Fragment>
		<h2>Welcome to {title}!</h2>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
			laborum.
		</p>

		<p>
			Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
			aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
			enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
			qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
			consectetur
		</p>
	</Fragment>
);

const AsideContent = () => (
	<Fragment>
		<h3>Additional stuff</h3>

		<ul>
			<li>Items</li>
			<li>Are</li>
			<li>Listed</li>
			<li>Here</li>
			<li>Wow!</li>
		</ul>
	</Fragment>
);

const Home = ({title, siteUrl}) => (
	<PageTemplate
		title={siteUrl}
		// fullPage
		main={ <MainContent title={title}/> }
		aside={ <AsideContent /> }
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

export default withSiteData(Home);
