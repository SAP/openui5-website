import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import loadable from '@loadable/component'

const EventDialog = loadable(() => import("../EventDialog"))
const AddToCalendarPopover = loadable(() => import("../AddToCalendarPopover"))

const Event = (props) => {
  const {
    data,
    emphasized,
    showAddToCalendar,
  } = props;

  const {
    title,
    subTitle,
    startDate,
    endDate,
    location,
    logo,
    url,
    recordingUrl,
    external
  } = data;

  const [ isDialogOpen, setIsDialogOpen ] = useState(false);
  const addToCalendarRef = useRef();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const onClick = () => {
    if (external) {
      const win = window.open(url || recordingUrl, "_blank");
      win.focus();
    } else {
      setIsDialogOpen(true);
    }
  };
  const onAfterDialogClose = () => {
    setIsDialogOpen(false);
  };

  const onAfterPopoverClose = () => {
    setIsPopoverOpen(false);
  };

  const onCalendarClick = (e) => {
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
    e.stopPropagation();
  };

  const onJoinClick = (e) => {
    const win = window.open(url, "_blank");
    win.focus();
    e.stopPropagation();
  };
  let eventDate = new Date(startDate);
  let monthFormatter = new Intl.DateTimeFormat('en-GB', {month: "long"})
  let dayFormatter = new Intl.DateTimeFormat('en-GB', {day: "numeric"})
  let yearFormatter = new Intl.DateTimeFormat('en-GB', {year: "numeric"})
  let timeFormatter = new Intl.DateTimeFormat('en-GB', {hour: "numeric", minute: "numeric", timeZoneName: "short"})

  return (
    <>
      <div
        className={classnames(
          styles.Event,
          emphasized ? styles.view_emphasized : null,
        )}
        onClick={onClick}
      >
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
        <div className={styles.Content}>
          <div className={styles.Date}>{`${monthFormatter.format(eventDate)} ${dayFormatter.format(eventDate)}, ${yearFormatter.format(eventDate)}, ${timeFormatter.format(eventDate)}`}</div>
          <div className={styles.Location}>{location}</div>
        </div>
        {
          showAddToCalendar && title !== "UI5ers live (Feb '21)"
            ? (
              <>
                <div className={styles.AddToCalendar} onClick={onCalendarClick} ref={addToCalendarRef}>
                  + Add to calendar
                </div>
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
          title === "UI5ers live (Feb '21)"
            ? (
              <div className={styles.AddToCalendar} onClick={onJoinClick}>
                Join now
              </div>
            )
            : null
        }
      </div>
      {
        !external
          ? (
            <EventDialog
              isOpen={isDialogOpen}
              onAfterClose={onAfterDialogClose}
              showAddToCalendar={showAddToCalendar}
              data={data}
            />
          )
          : null
      }
    </>
  );
};

Event.defaultProps = {
  emphasized: false
};

Event.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Event;
