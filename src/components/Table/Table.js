import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";


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

export default Table;