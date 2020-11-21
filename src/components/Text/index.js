import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";


const Text = ({ children, size, font, ...props }) => {
    return (
        <div
            className={classnames(
                styles.Text,
                size ? styles[`size_${size}`] : null,
                font ? styles[`font_${font}`] : null,
            )}
            {...props}
        >{children}</div>
    );
};

Text.defaultProps = {
    size: 1,
    font: "regular",
};

Text.propTypes = {
    size: PropTypes.oneOf(getCssModifiers(styles, "size")),
    font: PropTypes.oneOf(getCssModifiers(styles, "font")),
};


export default Text;