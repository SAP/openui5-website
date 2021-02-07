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
    speakers
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
          {speakers.map((speaker, key) =>
            <Speaker
              key={key}
              name={speaker.frontmatter.name}
              company={speaker.frontmatter.company}
              photo={speaker.frontmatter.photo ? speaker.frontmatter.photo.publicURL : null}
              socialMedia={{
                twitter: speaker.frontmatter.twitter,
                linkedin: speaker.frontmatter.linkedin,
                github: speaker.frontmatter.github
              }}
            />)
          }
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
