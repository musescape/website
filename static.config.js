import renderToHtml from './src/modules/renderStyles';
import React from "react";

const TITLE = 'MuseScape';
const URL = 'musescape.com';
const DESCRIPTION = 'To see a World in a Grain of Sand and a Heaven in a Wild Flower';

const getSiteData = () => ({
	siteRoot: URL,
	siteUrl: URL,
	title: TITLE
});

const getRoutes = () => [{
	path: '/',
	component: 'src/pages/Home'
}, {
	is404: true,
	component: 'src/pages/NotFound'
}];

const Document = ({ Html, Head, Body, children, renderMeta }) => (
	<Html>
	<Head>
		<meta charSet="UTF-8"/>
		<meta httpEquiv="x-ua-compatible" content="ie=edge"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, width=320"/>

		<title>{TITLE}</title>
		<meta name="description" content={DESCRIPTION} />

		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
		<link rel="manifest" href="/site.webmanifest" />
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
		<meta name="msapplication-TileColor" content="#da532c" />
		<meta name="msapplication-TileImage" content="/mstile-144x144.png" />
		<meta name="theme-color" content="#ffffff" />

		{renderMeta.styleTags}
	</Head>
	<Body>
	{children}
	</Body>
	</Html>
);

export default {
	getSiteData,
	getRoutes,
	renderToHtml,
	Document
};
