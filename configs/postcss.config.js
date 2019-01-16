module.exports = () => ({
	// The list of plugins for PostCSS
	// https://github.com/postcss/postcss
	plugins: [
		// Transfer @import rule by inlining content, e.g. @import 'normalize.css'
		// https://github.com/postcss/postcss-import
		require('postcss-import')(),

		// Fixes paths in url() after postcss-import plugin
		// https://github.com/postcss/postcss-url
		require('postcss-url')(),

		// Add vendor prefixes to CSS rules using values from caniuse.com
		// https://github.com/postcss/autoprefixer
		require('autoprefixer')(/* package.json/browserslist */),
	],
});