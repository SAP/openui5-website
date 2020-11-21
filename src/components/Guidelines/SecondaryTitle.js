import React from "react";
import styles from "./titleStyles.module.css";
import classnames from "classnames";


const SecondaryTitle = ({ children }) => {
    return (
        <h2 className={classnames(styles.Title, styles.SecondaryTitle)}>{children}</h2>
    );
};



export default SecondaryTitle;