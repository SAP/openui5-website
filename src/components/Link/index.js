import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Link = ({ children, href, target, ...props }) => {
    //let linkTarget = target === null && !href.includes(document.location.host) ? "_blank" : target;
    return (
        <a
            className={styles.Link}
            href={href}
            // target={linkTarget}
            {...props}
        >{children}</a>
    );
};

Link.defaultProps = {
    target: null,
    rel: "noopener noreferrer"
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    rel: PropTypes.string,
};

export default Link;