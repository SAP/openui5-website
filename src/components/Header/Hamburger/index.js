import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";

const Hamburger = ({ open, onClick }) => (
    <div
        className={classnames(
            styles.Hamburger,
            open ? styles.view_open : null
        )}
        onClick={onClick}
        onKeyDown={onClick}
        tabIndex="0"
        role="button"
        
    >
        <div className={styles.HamburgerItem}></div>
        <div className={styles.HamburgerItem}></div>
        <div className={styles.HamburgerItem}></div>
        <div className={styles.HamburgerItem}></div>
    </div>
);

Hamburger.defaultProps = {
    open: false
};

Hamburger.propTypes = {
    open: PropTypes.bool,
};

export default Hamburger;
