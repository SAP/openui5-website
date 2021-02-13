import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Link from "../Link";
import Markdown from "../Markdown";

const Event = ({ title, description, url, date, location, cancelled }) => {

    return (
        <div className={styles.Event}>
            <div className={styles.EventTitle}>
                {url ? <Link href={url} target="_blank" rel="noopener">{title}</Link> : title}
                {cancelled ? " [CANCELLED]" : null}
            </div>
            <div className={styles.EventLocation}>
                {`${date} / ${location}`}
            </div>
            { description
                ? <div className={styles.EventDescription}><Markdown source={description} /></div>
                : null
            }
        </div>
    );
};

Event.defaultProps = {
    description: null,
    url: null,
    cancelled: false,
};

Event.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    cancelled: PropTypes.bool
};

export default Event;
