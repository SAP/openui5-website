import React, { useState } from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import classnames from "classnames";

import Hamburger from "../Hamburger";
import Logo from "../../Logo";
import Version from "../Version";
import Navigation from "../Navigation";
import GitHub from "../GitHub";


const ToolbarItem = ({ mod, children }) => (
    <div className={classnames(styles.ToolbarItem, styles[`mod_${mod}`])}>
        { children }
    </div>
);

const Toolbar = ({ version }) => {
    const [isOpen, setIsOpen] = useState(false);

    function onHamburgerClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div
            className={classnames(
                styles.Toolbar,
                isOpen ? styles.state_open : null,
            )}
        >
            <ToolbarItem mod="hamburger"><Hamburger open={isOpen} onClick={onHamburgerClick} /></ToolbarItem>
            <ToolbarItem mod="logo"><Link to="/" style={{ display: 'inline-block' }}><Logo /></Link></ToolbarItem>
            <ToolbarItem mod="version"><Version>{version}</Version></ToolbarItem>
            <ToolbarItem mod="navigation"><Navigation /></ToolbarItem>
            <ToolbarItem mod="github"><GitHub /></ToolbarItem>
        </div>
    );
};

export default Toolbar;
