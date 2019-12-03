import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";


const Button = ({ children, size, href, target, ...props }) => {
    // let linkTarget = target === null && !href.includes(document.location.host) ? "_blank" : target;
    return (
        <a
            className={classnames(
                styles.Button,
                size ? styles[`size_${size}`] : null
            )}
            href={href}
            // target={linkTarget}
            {...props}
        >{children}</a>
    );
};

Button.defaultProps = {
    size: "1",
    target: null,
    rel: "noopener noreferrer"
};

Button.propTypes = {
    size: PropTypes.oneOf(getCssModifiers(styles, "size")),
    target: PropTypes.string,
    rel: PropTypes.string,
};


export default Button;