import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import _ from "lodash";
import Dialog from "../Dialog";
import Text from "../Text";
import styles from "./styles.module.css";
import Speaker from "./Speaker";
import Button from "./Button";
import AddToCalendarPopover from "../AddToCalendarPopover";
import "@ui5/webcomponents-icons/dist/add";
import "@ui5/webcomponents-icons/dist/video";
import { Icon } from '@ui5/webcomponents-react/lib/Icon';


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
    url,
    recordingUrl,
    speakers
  } = data;

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const addToCalendarRef = useRef();

  const onAfterPopoverClose = () => {
    setIsPopoverOpen(false);
  };

  const onCalendarClick = (e) => {
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
    e.stopPropagation();
  };

  const onRecordingClick = (e) => {
    const win = window.open(recordingUrl, "_blank");
    win.focus();
  };

  const onJoinClick = (e) => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <Dialog {...rest}>
      <div className={styles.Content}>
        <div className={styles.Header}>
          <div className={styles.HeaderTitle}>{title}</div>
          <div className={styles.HeaderSubTitle}>{subTitle}</div>
        </div>
        <div className={styles.Description} dangerouslySetInnerHTML={{__html: description}}></div>
        <div className={styles.Actions}>
          {
            showAddToCalendar
              ? (
                <>
                  <Button icon={<Icon name="add" />} onClick={onCalendarClick} ref={addToCalendarRef}>Add to calendar</Button>
                  <AddToCalendarPopover
                    event={data}
                    isOpen={isPopoverOpen}
                    targetRef={addToCalendarRef.current}
                    onAfterClose={onAfterPopoverClose}
                  />
                </>
              )
              : null
          }
          {
            recordingUrl
              ? <Button icon={<Icon name="video" />} onClick={onRecordingClick}>Recording</Button>
              : <Button onClick={onJoinClick}>Join</Button>
          }
        </div>
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
