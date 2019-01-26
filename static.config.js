import Document from './src/core/Document';
import renderToHtml from './src/modules/renderStyles';

const getSiteData = () => ({
	siteUrl: 'musescape.com',
	title: 'Musescape'
});

const getRoutes = () => [{
	path: '/',
	component: 'src/pages/Home'
}, {
	is404: true,
	component: 'src/pages/NotFound'
}];

export default {
	getSiteData,
	getRoutes,
	renderToHtml,
	Document
};
