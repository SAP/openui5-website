import React from "react";
import PropTypes from "prop-types";
import Dialog from "../Dialog";
import Text from "../Text";
import classnames from "classnames";
import styles from "./styles.module.css";
import Speaker from "./Speaker";

const EventDialog = (props) => {
  const {
    eventData,
    showAddToCalendar,
    ...rest
  } = props;

  const {
    title,
    subTitle,
    description,
    startDate,
    endDate,
    location,
    logo,
  } = eventData;

  return (
    <Dialog {...rest}>
      <div className={styles.Content}>
        <div className={styles.Header}>
          <div className={styles.HeaderTitle}>{title}</div>
          <div className={styles.HeaderSubTitle}>{subTitle}</div>
        </div>
        <div className={styles.Description}>{description}</div>
      </div>
      <div className={styles.Speakers}>
        <Text size="5" style={{ marginBottom: "calc(var(--default-margin-half) / 2)" }}>Speakers</Text>
        <div className={styles.SpeakersList}>
          <Speaker
            name="Stefan Back"
            company="SAP"
            photo="https://www.cats.org.uk/media/1500/our-strategy-cover-image.jpg?width=400"
            socialMedia={{
              twitter: "...",
              linkedin: "...",
              github: "..."
            }}
          />
          <Speaker
            name="Peter Muessig"
            company="SAP"
            photo="./path/to/photo"
            socialMedia={{
              twitter: "...",
              linkedin: "...",
              github: "..."
            }}
          />
          <Speaker
            name="Oliver Pehnke"
            company="eXXcellent Solutions GmbH"
            photo="./path/to/photo"
            socialMedia={{
              twitter: "...",
              linkedin: "...",
              github: "..."
            }}
          />
        </div>
      </div>
    </Dialog>
  );
};

EventDialog.defaultProps = {
  // emphasized: false
};

EventDialog.propTypes = {
    // title: PropTypes.string.isRequired,
};

export default EventDialog;
