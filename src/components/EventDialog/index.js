import React, { useState, useRef } from "react";
import _ from "lodash";
import Dialog from "../Dialog";
import Text from "../Text";
import styles from "./styles.module.css";
import Speaker from "./Speaker";
import Button from "../ButtonNew";
import AddToCalendarPopover from "../AddToCalendarPopover";
import "@ui5/webcomponents-icons/dist/add";
import "@ui5/webcomponents-icons/dist/video";
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import formatEventDate from "../../utils/formatEventDate";


const EventDialog = (props) => {
  const {
    data,
    isLocalTime,
    ...rest
  } = props;

  const {
    title,
    subTitle,
    description,
    url,
    logo,
    recordingUrl,
    registrationUrl,
    location,
    startDate,
    endDate,
    speakers,
    status,
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

  const onRegisterClick = (e) => {
    const win = window.open(registrationUrl, "_blank");
    win.focus();
  };

  const isPastEvent = status === "past";
  const isActive = status === "active";

  return (
    <Dialog {...rest}>
      <div className={styles.Content}>
        <div className={styles.Header}>
          <div className={styles.HeaderContent}>
            <div className={styles.HeaderTitle}>{title}</div>
            <div className={styles.HeaderSubTitle}>{subTitle}</div>
          </div>
          {
            logo
              ? <div className={styles.Logo}><img src={logo} /></div>
              : null
          }
        </div>
        <div className={styles.Bar}>
          <div className={styles.Date}>{formatEventDate(startDate, endDate, {showStartTime: true, showEndTime: true, isLocalTime})}</div>
          <div className={styles.Location}>{location}</div>
        </div>
        <div className={styles.Description} dangerouslySetInnerHTML={{__html: description}}></div>
        <div className={styles.Actions}>
          {
            status === "scheduled"
              ? (
                <>
                  <Button color="darkBlue" icon={<Icon name="add" />} onClick={onCalendarClick} ref={addToCalendarRef}>Add to calendar</Button>
                  <AddToCalendarPopover
                    event={data}
                    isOpen={isPopoverOpen}
                    targetRef={addToCalendarRef.current}
                    onAfterClose={onAfterPopoverClose}
                  />
                  { registrationUrl && <Button color="darkBlue" onClick={onRegisterClick}>Register</Button> }
                </>
              )
              : null
          }
          { isActive && url && <Button color="orange" onClick={onJoinClick}>JOIN EVENT</Button> }
          { isPastEvent && recordingUrl && <Button color="darkBlue" icon={<Icon name="video" />} onClick={onRecordingClick}>Recording</Button> }
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

export default EventDialog;
