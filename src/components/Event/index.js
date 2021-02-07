import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import EventDialog from "../EventDialog";
import AddToCalendarPopover from "../AddToCalendarPopover";
import styles from "./styles.module.css";

const Event = (props) => {
  const {
    title,
    subTitle,
    description,
    startDate,
    endDate,
    location,
    logo,
    speakers,
    emphasized,
    showAddToCalendar,
    url,
  } = props;

  const [ isDialogOpen, setIsDialogOpen ] = useState(false);
  const addToCalendarRef = useRef();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const onClick = () => {
    if (url) {
      // open URL
    } else {
      setIsDialogOpen(true);
    }
  };
  const onAfterClose = () => {
    setIsDialogOpen(false);
  };

  const onCalendarClick = (e) => {
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
    e.stopPropagation();
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
          <div className={styles.Date} dangerouslySetInnerHTML={{__html: startDate }} />
          <div className={styles.Location}>{location}</div>
        </div>
        {
          showAddToCalendar
            ? (
              <>
                <div className={styles.AddToCalendar} onClick={onCalendarClick} ref={addToCalendarRef}>
                  + Add to calendar
                </div>
                <AddToCalendarPopover isOpen={isPopoverOpen} targetRef={addToCalendarRef.current} />
              </>
            )
            : null
        }
      </div>
      {
        !url
          ? (
            <EventDialog
              isOpen={isDialogOpen}
              onAfterClose={onAfterClose}
              showAddToCalendar={showAddToCalendar}
              eventData={{
                title,
                subTitle,
                description,
                startDate,
                endDate,
                location,
                logo,
                speakers
              }}
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
    title: PropTypes.string.isRequired,
};

export default Event;
