import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { StaticQuery, graphql } from "gatsby";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";

import Text from "../Text";
import Toolbar from "./Toolbar";

const query = graphql`
    query {
        indexJson {
            header {
                description
            }
        }
        versionsJson {
            version
        }
    }
`;

const Header = ({ view }) => {
    return (
        <StaticQuery
            query={query}
            render={({ indexJson, versionsJson }) => (
                <div
                    className={classnames(
                        styles.Header,
                        view ? styles[`view_${view}`] : null
                    )}
                >
                    <div className={styles.HeaderContent}>
                        <Toolbar version={versionsJson.version} />
                        { view === "full"
                            ? (
                                <div className={styles.HeaderTitle}>
                                    <Text size="2" font="light" dangerouslySetInnerHTML={{__html: indexJson.header.description}} />
                                </div>
                            )
                            : null
                        }
                    </div>
                </div>
            )}
        />
    );
};

Header.defaultProps = {
    view: null
};

Header.propTypes = {
    view: PropTypes.oneOf(getCssModifiers(styles, "view"))
};


export default Header;
