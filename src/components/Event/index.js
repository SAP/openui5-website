import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import loadable from '@loadable/component'
import formatEventDate from "../../utils/formatEventDate";
import Button from "../ButtonNew";

import "@ui5/webcomponents-icons/dist/shortcut";

const EventDialog = loadable(() => import("../EventDialog"))
const AddToCalendarPopover = loadable(() => import("../AddToCalendarPopover"))
const IconComponent = loadable(() => import("@ui5/webcomponents-react/lib/Icon"), {
  resolveComponent: (components) => components.Icon,
})

// const monthFormatter = new Intl.DateTimeFormat('en-GB', {month: "long"})
// const dayFormatter = new Intl.DateTimeFormat('en-GB', {day: "numeric"})
// const yearFormatter = new Intl.DateTimeFormat('en-GB', {year: "numeric"})
// const timeFormatter = new Intl.DateTimeFormat('en-GB', {hour: "numeric", minute: "numeric"})

const Event = (props) => {
  const {
    data,
    emphasized,
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

  const isPastEvent = data.status === "past";
  const isActive = data.status === "active";

  return (
    <>
      <div
        className={classnames(
          styles.Event,
          emphasized ? styles.view_emphasized : null,
          isActive ? styles.mod_active : null,
        )}
        onClick={onClick}
      >
        {
          external
            ? <div className={styles.ExternalIcon} title="Opens in New window"><IconComponent name="shortcut" /></div>
            : null
        }
        <div className={styles.Header}>
          <div className={styles.HeaderContent}>
            <div className={styles.HeaderTitle}>
              <span>
                {title}
              </span>
            </div>
            <div className={styles.HeaderSubTitle}>{subTitle}</div>
          </div>
          {
            logo
              ? <div className={styles.Logo}><img src={logo} /></div>
              : null
          }
        </div>
        <div className={styles.Content}>
          <div className={styles.Date}>
            {formatEventDate(startDate, endDate, { showYear: false })}
            {
              isActive //!isPastEvent
                ? (
                  <div className={classnames(styles.Countdown, isActive ? styles.mod_active : null)}>
                    { isActive ? "Just Now" : "12 days, 12:00:31"}
                  </div>
                )
                : null
            }
          </div>
          <div className={styles.Location}>{location}</div>
        </div>
        {
          isActive
            ? (
              <div className={styles.Actions} onClick={onJoinClick}>
                <Button color="orange">JOIN EVENT</Button>
              </div>              
            )
            : (
              isPastEvent
                ? null
                : (
                  <>
                    <div className={styles.Actions}>
                      <Button color="blue" onClick={onCalendarClick} ref={addToCalendarRef}>+ Add to calendar</Button>
                    </div>
                    <AddToCalendarPopover
                      event={data}
                      isOpen={isPopoverOpen}
                      targetRef={addToCalendarRef.current}
                      onAfterClose={onAfterPopoverClose}
                    />
                  </>
                )
            )
        }
      </div>
      {
        !external
          ? (
            <EventDialog
              isOpen={isDialogOpen}
              onAfterClose={onAfterDialogClose}
              data={data}
            />
          )
          : null
      }
    </>
  );
};

Event.defaultProps = {
  emphasized: false,
};

Event.propTypes = {
    data: PropTypes.object.isRequired,
    emphasized: PropTypes.bool,
};

export default Event;
