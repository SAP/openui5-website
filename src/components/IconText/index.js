import React from "react";
import styles from "./styles.module.css";


const IconText = ({ icon, text }) => {
  const attributes = {
    style: {
      maxWidth: "100%",
      maxHeight: "100%",
    }
  };

  return (
    <div className={styles.IconText}>
      <div className={styles.Icon}>{React.cloneElement(icon, attributes)}</div>
      <div className={styles.Text}>{text}</div>
    </div>
  );
};

export default IconText;
