import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import getCssModifiers from "../../utils/getCssModifiers";
import _ from "lodash";

const List = ({ column, style, justifyContent, children }) => (
    <div
        className={classnames(
            styles.List,
            column ? styles[`column_${column}`] : null,
            justifyContent ? styles[`justifyContent_${_.camelCase(justifyContent)}`] : null
        )}
        style={style}
    >
        {children}
    </div>
);

List.defaultProps = {
    column: null,
    justifyContent: null,
    style: null,
};


List.propTypes = {
    column: PropTypes.oneOf(getCssModifiers(styles, "column")),
    justifyContent: PropTypes.oneOf(getCssModifiers(styles, "justifyContent")),
    style: PropTypes.object,
};

const ListItem = ({ style, children }) => (
    <div className={styles.ListItem} style={style}>{children}</div>
);

ListItem.defaultProps = {
    style: null,
};

ListItem.propTypes = {
    style: PropTypes.object,
};


export {
    List,
    ListItem
};
