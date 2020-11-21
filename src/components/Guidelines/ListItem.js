import React from "react";
import styles from "./listStyles.module.css";
import classnames from "classnames";


const GuidelinesListItem = ({ background, children }) => {
    return (
        <div
            className={classnames(
                styles.GuidelinesListItem,
                background ? styles[`background_${background}`] : null
            )}
            >
            {children}
        </div>
    );
};



export default GuidelinesListItem;