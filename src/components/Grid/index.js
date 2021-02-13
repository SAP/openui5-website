import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

const Grid = ({ column, children }) => (
  <div
    className={classnames(
      styles.Grid,
      styles[`column_${column}`],
    )}
  >
    {children}
  </div>
);


export default Grid;
