import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";


const Cell = ({ children, ...props }) => {
    return (
        <div
            className={classnames(
                styles.Cell,
            )}
            {...props}
        >{children}</div>
    );
};

Cell.defaultProps = {
};

Cell.propTypes = {
};


export default Cell;