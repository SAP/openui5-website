import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";


const Table = ({ children, ...props }) => {
    return (
        <div
            className={classnames(
                styles.Table,
            )}
            {...props}
        >{children}</div>
    );
};

Table.defaultProps = {
};

Table.propTypes = {
};


export default Table;