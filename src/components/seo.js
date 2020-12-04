import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import {StaticQuery, graphql} from "gatsby"

function SEO({description, lang, meta, keywords, title}) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription =
                    description || data.site.siteMetadata.description
                return (
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={title}
                        titleTemplate={`%s — ${data.site.siteMetadata.title}`}
                        defaultTitle={data.site.siteMetadata.title}
                        link={[
                            {"rel": "icon", "href": data.site.siteMetadata.faviconUrl}
                        ]}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            }
                        ]
                            .concat(
                                keywords.length > 0
                                    ? {
                                        name: `keywords`,
                                        content: keywords.join(`, `),
                                    }
                                    : []
                            )
                            .concat(meta)}
                    />
                )
            }}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title,
                faviconUrl
            }
        }
    }
`
