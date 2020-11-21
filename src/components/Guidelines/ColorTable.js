import React from "react";
import classnames from "classnames";
import styles from "./tableStyles.module.css";


const ColorTable = ({ children, ...props }) => {
    return (
        <table
            className={classnames(
                styles.ColorTable,
            )}
            {...props}
        >{children}</table>
    );
};

export default ColorTable;