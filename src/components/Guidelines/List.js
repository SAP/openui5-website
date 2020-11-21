import React from "react";
import styles from "./listStyles.module.css";
import classnames from "classnames";



const GuidelinesList = ({ type, children }) => {

    return (
        <div
            className={classnames(
                styles.GuidelinesList,
                type ? styles[`type_${type}`] : null
            )}
            >
            {children}
        </div>
    );
};


export default GuidelinesList;