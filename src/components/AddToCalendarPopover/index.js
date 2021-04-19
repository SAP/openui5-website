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


const AddToCalendarPopover = (props) => {
  const {
    isOpen,
    event,
    targetRef,
    onAfterOpen,
    onAfterClose,
  } = props;
  const [classNames, setClassNames] = useState([]);

  const _onAfterOpen = () => {
    setClassNames([styles.animate]);
    onAfterOpen();
  };

  const _onAfterClose = () => {
    setClassNames([]);
    onAfterClose();
  };

  return (
    <Popover
      isOpen={isOpen}
      placementType="Top"
      horizontalAlign="Left"
      targetRef={targetRef}
      noArrow={true}
      onAfterOpen={_onAfterOpen}
      onAfterClose={_onAfterClose}
      className={styles.Popover}
    >
      <div className={styles.Content} onClick={(e) => e.stopPropagation()}>
        <CalendarButton
            type="google"
            event={event}
            className={classnames(
                styles.CalendarButton,
                styles.icon_1,
                ...classNames
            )}
        >
            <IconText icon={<img src={GoogleIcon} alt="Google"/>} text="Google" />
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
            <IconText icon={<img src={Office365Icon} alt="Office 365"/>} text="Office 365" />
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
            <IconText icon={<img src={iCalIcon} alt="iCal"/>} text="iCal" />
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
            <IconText icon={<img src={OutlookIcon} alt="Outlook"/>} text="Outlook" />
        </CalendarButton>
      </div>
    </Popover>
  );
};

AddToCalendarPopover.defaultProps = {
  onAfterOpen: () => {},
  onAfterClose: () => {},
};

export default AddToCalendarPopover;