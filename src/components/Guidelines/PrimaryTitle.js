import React from "react";
import styles from "./titleStyles.module.css";
import classnames from "classnames";


const PrimaryTitle = ({ children }) => {
    return (
        <h1 className={classnames(styles.Title ,styles.PrimaryTitle)}>{children}</h1>
    );
};



export default PrimaryTitle;