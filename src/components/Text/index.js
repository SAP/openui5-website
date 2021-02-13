import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";


const Text = ({ children, size, font, weight, ...props }) => {
    return (
        <div
            className={classnames(
                styles.Text,
                size ? styles[`size_${size}`] : null,
                font ? styles[`font_${font}`] : null,
                weight ? styles[`weight_${weight}`] : null,
            )}
            {...props}
        >{children}</div>
    );
};

Text.defaultProps = {
    size: null,
    font: "regular",
    weight: null,
};

Text.propTypes = {
    size: PropTypes.oneOf(getCssModifiers(styles, "size")),
    font: PropTypes.oneOf(getCssModifiers(styles, "font")),
    weight: PropTypes.oneOf(getCssModifiers(styles, "weight")),
};


export default Text;