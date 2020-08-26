import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";


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

export default Cell;