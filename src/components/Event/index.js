import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import loadable from '@loadable/component'

const EventDialog = loadable(() => import("../EventDialog"))
const AddToCalendarPopover = loadable(() => import("../AddToCalendarPopover"))

const monthFormatter = new Intl.DateTimeFormat('en-GB', {month: "long"})
const dayFormatter = new Intl.DateTimeFormat('en-GB', {day: "numeric"})
const yearFormatter = new Intl.DateTimeFormat('en-GB', {year: "numeric"})
const timeFormatter = new Intl.DateTimeFormat('en-GB', {hour: "numeric", minute: "numeric"})

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
  let eventStart = new Date(startDate);
  let eventEnd = new Date(endDate);

  let formattedDate
  if (startDate.match(/^\d{4}\/\d{2}\/\d{2}$/)) {
    //only date given
    let endDateFormatted = ''
    if (eventStart.getDate() !== eventEnd.getDate()) {
      endDateFormatted = eventStart.getMonth() !== eventEnd.getMonth() ? ` - ${monthFormatter.format(eventEnd)} ${dayFormatter.format(eventEnd)}` : ` - ${dayFormatter.format(eventEnd)}`;
    }
    formattedDate = `${monthFormatter.format(eventStart)} ${dayFormatter.format(eventStart)}${endDateFormatted}, ${yearFormatter.format(eventStart)}`;
  } else {
    //the date with time
    formattedDate = `${monthFormatter.format(eventStart)} ${dayFormatter.format(eventStart)}, ${yearFormatter.format(eventStart)}, ${timeFormatter.format(eventStart)}`;
  }

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
          <div className={styles.Date}>{formattedDate}</div>
          <div className={styles.Location}>{location}</div>
        </div>
        {
          showAddToCalendar
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
          false
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
