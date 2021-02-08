import React, { useState } from "react";
import classnames from "classnames";
import Popover from "../Popover";
import CalendarButton from "../CalendarButton";
import IconText from "../IconText"
import styles from "./styles.module.css";

// Icons:
import GoogleIcon from "./images/google.svg";
import Office365Icon from "./images/office365.svg";
import OutlookIcon from "./images/outlook.svg";
import iCalIcon from "./images/ical.png";


const AddToCalendarPopover = ({ isOpen, event, targetRef }) => {
  const [classNames, setClassNames] = useState([]);

  const onAfterOpen = () => {
    setClassNames([styles.animate]);
  };

  const onAfterClose = () => {
    setClassNames([]);
  };

  return (
    <Popover
      isOpen={isOpen}
      placementType="Top"
      horizontalAlign="Left"
      targetRef={targetRef}
      noArrow={true}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      className={styles.Popover}
    >
      <div className={styles.Content}>
        <CalendarButton
            type="google"
            event={event}
            className={classnames(
                styles.CalendarButton,
                styles.icon_1,
                ...classNames
            )}
        >
            <IconText icon={<img src={GoogleIcon}/>} text="Google" />
        </CalendarButton>
        <CalendarButton
            type="office365"
            event={event}
            className={classnames(
                styles.CalendarButton,
                styles.icon_2,
                ...classNames
            )}
        >
            <IconText icon={<img src={Office365Icon}/>} text="Office 365" />
        </CalendarButton>
        <CalendarButton
            type="ics"
            event={event}
            className={classnames(
                styles.CalendarButton,
                styles.icon_3,
                ...classNames
            )}
        >
            <IconText icon={<img src={iCalIcon}/>} text="iCal" />
        </CalendarButton>
        <CalendarButton
            type="ics"
            event={event}
            className={classnames(
                styles.CalendarButton,
                styles.icon_4,
                ...classNames
            )}
        >
            <IconText icon={<img src={OutlookIcon}/>} text="Outlook" />
        </CalendarButton>
      </div>
    </Popover>
  );
};

export default AddToCalendarPopover;