import React from "react";
import {StaticQuery, graphql, Link} from "gatsby";
import styles from "./styles.module.css";

const query = graphql`
    query {
        allHeaderNavigationJson {
            edges {
                node {
                    name,
                    to
                }
            }
        }
    }
`;

const Navigation = () => (
    <StaticQuery
        query={query}
        render={({ allHeaderNavigationJson }) => (
            <div className={styles.Navigation}>
                {
                    allHeaderNavigationJson.edges.map(({ node: { to, name } }) => (
                        <Link
                            key={name}
                            to={to}
                            className={styles.NavigationItem}
                            activeClassName={styles.state_active}
                        >{name}</Link>
                    ))
                }
            </div>
        )}
    />
);

export default Navigation;
