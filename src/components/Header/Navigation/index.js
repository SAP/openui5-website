import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import classnames from "classnames";
import _ from "lodash";
import {StaticQuery, graphql, Link} from "gatsby";
import { useLocation } from "@reach/router";
import isWindow from "../../../utils/isWindow";
import styles from "./styles.module.css";

const LINK_HORIZONTAL_PADDING = 10;

const getInlineStyles = (element) => {
  return Array.from(element.style).reduce((style, propertyName) => {
    style[_.camelCase(propertyName)] = element.style[propertyName];
    return style;
  }, {});
};

const query = graphql`
    query {
        allHeaderNavigationJson {
            edges {
                node {
                    name,
                    to
                }
            }
        }
    }
`;

const Navigation = ({ className = "" }) => {
  const navRef = useRef();
  const lineRef = useRef();
  const [lineStyle, setLineStyle] = useState({});
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isScreen1200 = useMediaQuery("(max-width: 1200px)");
  const isScreen1100 = useMediaQuery("(max-width: 1100px)");
  const isScreen980 = useMediaQuery("(max-width: 980px)");

  const onMouseEnter = useCallback((e) => {
    calculateLineGeometry(e.target);
  }, []);

  const onMouseLeave = useCallback(() => {
    calculateLineGeometry();
  }, []);

  const calculateLineGeometry = (activeElement) => {
    const lineDomNode = lineRef.current;
    const navigationNode = navRef.current;

    if (navigationNode && lineDomNode) {
      const parentLeftOffset = navigationNode.getBoundingClientRect().left;
      let style;

      if (!activeElement) {
        const navItems = navigationNode.querySelectorAll(`.${styles.NavigationItem}`);
        const activeElementIndex = Array.from(navItems).findIndex((element) => {
          return element.children[0].classList.contains(styles.state_active);
        });
        if (activeElementIndex !== -1) {
          activeElement = navigationNode.children[activeElementIndex].children[0];
        }
      }

      const lineStyle = getInlineStyles(lineDomNode);

      if (activeElement) {
        const activeElementGeometry = activeElement.getBoundingClientRect();
        const lineWidth = activeElementGeometry.width - LINK_HORIZONTAL_PADDING;
        const lineLeft = activeElementGeometry.left - parentLeftOffset + LINK_HORIZONTAL_PADDING / 2;

        style = {
          left: `${lineLeft}px`,
          transform: `scaleX(1)`,
          width: `${lineWidth}px`,
        };

        if (lineStyle.transform === "scaleX(0)") {
          style.transitionProperty = "transform,opacity";
        }
      } else {
        style = {
          ...lineStyle,
          transform: `scaleX(0)`,
        };
      }

      setLineStyle(style);
    }
  };

  useEffect(() => {
    calculateLineGeometry();
  }, [navRef, lineRef, location, isMobile, isScreen1200, isScreen1100, isScreen980]);

  return (
    <StaticQuery
        query={query}
        render={({ allHeaderNavigationJson }) => (
            <div
              className={classnames(styles.Navigation, ...className.split(","))}
              ref={navRef}
              onMouseLeave={onMouseLeave}
            >
                {
                    allHeaderNavigationJson.edges.map(({ node: { to, name } }) => (
                      <div className={styles.NavigationItem}>
                        <Link
                            key={name}
                            onMouseEnter={onMouseEnter}
                            className={styles.NavigationLink}
                            activeClassName={styles.state_active}
                            to={to}
                            // tabIndex={1}
                        >{name}</Link>
                      </div>
                    ))
                }
                {!isMobile && isWindow ? <div ref={lineRef} style={lineStyle} className={styles.Line} /> : null}
            </div>
        )}
    />
  );
};

export default Navigation;
