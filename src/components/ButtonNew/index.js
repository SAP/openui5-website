import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";


const Button = React.forwardRef(({ icon, children, color, ...props }, ref) => {

    return (
        <div
            className={classnames(
                styles.Button,
                styles[`color_${color}`]
            )}
            {...props}
            ref={ref}
        >
            {
            icon
                ? <div className={styles.Icon}>{icon}</div>
                : null
            }
            {children}
        </div>
    );
});

Button.defaultProps = {
    size: "blue",
};

Button.propTypes = {
    color: PropTypes.oneOf(getCssModifiers(styles, "color")),
};


export default Button;