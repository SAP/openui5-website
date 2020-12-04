module.exports = {
    siteMetadata: {
        title: `OpenUI5`,
        description: ``,
        faviconUrl: `/favicon/favicon.png`,
        copyright: `&copy; ${new Date().getFullYear()} SAP SE. Made available under <nobr>Apache License 2.0</nobr>`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `OpenUI5 Website`,
                short_name: `OpenUI5`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `standalone`,
                icon: `data/logo.png`, // This path is relative to the root of the site.
                include_favicon: false // This will exclude favicon link tag, because icon without background is used
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    // Allows to define custom env variables according to upcoming "CSS Environment Variables" specification — https://drafts.csswg.org/css-env-1/
                    // https://github.com/csstools/postcss-env-function
                    require('postcss-env-function')({
                        importFrom: [
                            {
                                environmentVariables: {
                                    '--screen-breakpoint-1440': '1440px',
                                    '--screen-breakpoint-1100': '1100px',
                                    '--screen-breakpoint-980': '980px',
                                    '--screen-breakpoint-767': '767px',
                                    '--screen-breakpoint-568': '568px',
                                },
                            }
                        ],
                    }),

                    // Allows to use the upcoming "CSS Nesting Module" specification — https://drafts.csswg.org/css-nesting-1/
                    // https://github.com/jonathantneal/postcss-nesting
                    require('postcss-nesting')
                ],
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
              // CommonMark mode (default: true)
              commonmark: true,
              // Footnotes mode (default: true)
              footnotes: true,
              // Pedantic mode (default: true)
              pedantic: true,
              // GitHub Flavored Markdown mode (default: true)
              gfm: true,
              // Plugins configs
              plugins: [
                {
                    resolve: `gatsby-remark-copy-linked-files`,
                    options: {
                      ignoreFileExtensions: ['bmp', 'tiff'],
                    }
                }
              ],
            },
        },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    ],
};
