import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import classnames from "classnames";
import { useLocation } from "@reach/router";
import { useMediaQuery } from "@react-hook/media-query";

import Hamburger from "../Hamburger";
import Logo from "../../Logo";
import Version from "../Version";
import Navigation from "../Navigation";
import GitHub from "../GitHub";


const ToolbarItem = ({ mod, className, children }) => (
    <div
        className={classnames(
            styles.ToolbarItem, styles[`mod_${mod}`],
            className
        )}
    >
        { children }
    </div>
);

const Toolbar = ({ version }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isMobile = useMediaQuery("(max-width: 767px)");

    function onHamburgerClick() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setIsOpen(false);
    }, [location, isMobile]);

    useEffect(() => {
        const htmlClassList = document.documentElement.classList;
        if (isOpen) {
            htmlClassList.add("noScroll");
        } else {
            htmlClassList.remove("noScroll");
        }
    }, [isOpen]);

    return (
        <div
            className={classnames(
                styles.Toolbar,
                isOpen ? styles.view_open : null
            )}
        >
            <ToolbarItem mod="hamburger"><Hamburger open={isOpen} onClick={onHamburgerClick} /></ToolbarItem>
            <ToolbarItem mod="logo"><Link to="/" style={{ display: 'inline-block' }}><Logo /></Link></ToolbarItem>
            <ToolbarItem mod="version"><Version>{version}</Version></ToolbarItem>
            <ToolbarItem mod="navigation"><Navigation className={styles.Navigation} /></ToolbarItem>
            <ToolbarItem mod="github"><GitHub /></ToolbarItem>
        </div>
    );
};

export default Toolbar;
