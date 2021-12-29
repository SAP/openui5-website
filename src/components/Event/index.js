import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "@reach/router"
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.module.css";
import loadable from '@loadable/component'
import formatEventDate from "../../utils/formatEventDate";
import Button from "../ButtonNew";

const EventDialog = loadable(() => import("../EventDialog"))
const AddToCalendarPopover = loadable(() => import("../AddToCalendarPopover"))
const ShortcutIcon = loadable(() => import("./ShortcutIcon"))
const Countdown = loadable(() => import("./Countdown"))

// const monthFormatter = new Intl.DateTimeFormat('en-GB', {month: "long"})
// const dayFormatter = new Intl.DateTimeFormat('en-GB', {day: "numeric"})
// const yearFormatter = new Intl.DateTimeFormat('en-GB', {year: "numeric"})
// const timeFormatter = new Intl.DateTimeFormat('en-GB', {hour: "numeric", minute: "numeric"})

const Event = (props) => {
  const routerLocation = useLocation();
  const navigate = useNavigate();

  const {
    data,
    emphasized,
    isLocalTime
  } = props;

  const {
    id,
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

  useEffect(() => {
    const match = routerLocation.hash.match(/#id=(.*)/);
    const routerId = match && match[1];
    const isCurrentEvent = routerId === id;
    setTimeout(() => setIsDialogOpen(isCurrentEvent), 200); // workaround due to WC rendering delay on initial page load
  }, [routerLocation, id]);

  const onClick = () => {
    if (external) {
      const win = window.open(url || recordingUrl, "_blank");
      win.focus();
    } else {
      navigate(`#id=${id}`, { replace: true })
    }
  };
  const onAfterDialogClose = () => {
    navigate("#", { replace: true })
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
            ? <div className={styles.ExternalIcon} title="Opens in New window"><ShortcutIcon /></div>
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
            <span className={styles.StartDate}>{formatEventDate(startDate, endDate, { showYear: false, showStartTime: !isPastEvent, isLocalTime })}</span>
            {!isPastEvent && <Countdown startDate={new Date(startDate)} endDate={new Date(endDate)} />}
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
              isLocalTime={isLocalTime}
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
