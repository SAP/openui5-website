import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import Link from "../Link";
import getCssModifiers from "../../utils/getCssModifiers";
import Markdown from "../Markdown";

const Tile = ({ type, align, title, description, icon, url, className, children }) => {
    const tileTitle = (
        url
        ? <Link href={url}>{title}</Link>
        : title
    );

    return (
        <div
            className={classnames(
                styles.Tile,
                type ? styles[`type_${type}`] : null,
                align ? styles[`align_${align}`] : null,
            )}
        >
            { icon
                ? <div className={styles.TileIcon}>{icon()}</div>
                : null
            }
            <div className={styles.TileTitle}>{tileTitle}</div>
            { description
                ? <div className={styles.TileDescription}><Markdown source={description} /></div>
                : null
            }
            { children }
        </div>
    );
};

Tile.defaultProps = {
    description: null,
    icon: null,
    type: null,
    url: null,
    align: null,
};

Tile.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    icon: PropTypes.func,
    url: PropTypes.string,
    type: PropTypes.oneOf(getCssModifiers(styles, "type")),
    align: PropTypes.oneOf(getCssModifiers(styles, "align")),
};

export default Tile;
