import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";

const Version = ({ children }) => (
    <Link to="/releases" className={styles.Version}>{children}</Link>
);

export default Version;
