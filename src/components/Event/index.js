import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";

const Event = (props) => {
  const {
    title,
    description,
    date,
    location,
    logo,
    emphasized,
    showAddToCalendar,
  } = props;
  return (
    <div className={classnames(
      styles.Event,
      emphasized ? styles.view_emphasized : null,
    )}>
      <div className={styles.Header}>
        <div className={styles.HeaderTitle}>{title}</div>
        <div className={styles.HeaderDescription}>{description}</div>
      </div>
      <div className={styles.Content}>
        <div className={styles.Date} dangerouslySetInnerHTML={{__html: date }} />
        <div className={styles.Location}>{location}</div>
      </div>
      {
        showAddToCalendar
          ? (
            <div className={styles.AddToCalendar}>
              + Add to calendar
            </div>
          )
          : null
      }
    </div>
  );
};

Event.defaultProps = {
  emphasized: false
};

Event.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Event;
