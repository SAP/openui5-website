import React from "react";
import {graphql, StaticQuery} from "gatsby";
import styles from "./styles.module.css";

const query = graphql`
    query {
        allFooterNavigationJson {
            edges {
                node {
                    to,
                    name
                }
            }
        }
        site {
            siteMetadata {
                copyright
            }
        }
    }
`;

const Footer = () => (
    <StaticQuery
        query={query}
        render={({ allFooterNavigationJson, site }) => (
            <div className={styles.Footer}>
                <div className={styles.FooterContent}>
                    <div className={styles.FooterItem} dangerouslySetInnerHTML={{__html: site.siteMetadata.copyright}} />
                    {
                        allFooterNavigationJson.edges.map(({ node: { to, name } }) => (
                            <div key={name} className={styles.FooterItem}>
                                <a href={to} rel="noopener noreferrer" target="_blank">{name}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        )}
    />

);

export default Footer;
