import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";


const Row = ({ children, type, ...props }) => {
    return (
        <div
            className={classnames(
                styles.Row,
                type ? styles[`type_${type}`] : null
            )}
            {...props}
        >{children}</div>
    );
};

Row.defaultProps = {
    type: null
};

Row.propTypes = {
    type: PropTypes.oneOf(getCssModifiers(styles, "type")),
};


export default Row;