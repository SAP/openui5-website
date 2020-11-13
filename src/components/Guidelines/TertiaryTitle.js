import React from "react";
import styles from "./titleStyles.module.css";
import classnames from "classnames";


const TertiaryTitle = ({ children }) => {
    return (
        <h3 className={classnames(styles.TertiaryTitle)}>{children}</h3>
    );
};



export default TertiaryTitle;