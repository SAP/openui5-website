import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

const Button = React.forwardRef(({ icon, onClick, children }, ref) => (
  <div
    className={classnames(
      styles.Button,
    )}
    onClick={onClick}
    ref={ref}
  >
    {
      icon
        ? <div className={styles.Icon}>{icon}</div>
        : null
    }
    {children}
  </div>
));


export default Button;
