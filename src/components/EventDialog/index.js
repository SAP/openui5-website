import React from "react";
import PropTypes from "prop-types";
import Dialog from "../Dialog";
import Text from "../Text";
import classnames from "classnames";
import styles from "./styles.module.css";
import Speaker from "./Speaker";
import _ from "lodash";

const EventDialog = (props) => {
  const {
    data,
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
    speakers
  } = data;

  return (
    <Dialog {...rest}>
      <div className={styles.Content}>
        <div className={styles.Header}>
          <div className={styles.HeaderTitle}>{title}</div>
          <div className={styles.HeaderSubTitle}>{subTitle}</div>
        </div>
        <div className={styles.Description}>{description}</div>
      </div>
      {
        _.isEmpty(speakers)
          ? null
          : (
            <div className={styles.Speakers}>
              <Text size="5" style={{ marginBottom: "calc(var(--default-margin-half) / 2)" }}>Speakers</Text>
              <div className={styles.SpeakersList}>
                {speakers.map((speaker, key) =>
                  <Speaker
                    key={key}
                    {...speaker}
                  />)
                }
              </div>
            </div>
          )
      }
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
