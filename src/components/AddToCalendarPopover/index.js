import React from "react";
import classnames from "classnames";
import Popover from "../Popover";
import CalendarButton from "../CalendarButton";
import CalendarIcon from "./CalendarIcon"
import styles from "./styles.module.css";


const AddToCalendarPopover = ({ isOpen, targetRef }) => {
  // const [classNames, setClassNames] = useState([]);

  // const onAfterShow = () => {
  //     setClassNames([styleModule.animate]);
  // };

  // const onAfterHide = () => {
  //     setClassNames([]);
  // };

  return (
    <Popover
      isOpen={isOpen}
      placementType="Top"
      horizontalAlign="Left"
      targetRef={targetRef}
      noArrow={true}
      // onBeforeClose={togglePopover}
      className={styles.Popover}
    >
      {/* <CalendarButton
          type="google"
          className={styles.CalendarButton}
      />
      <CalendarButton
          type="office365"
          className={styles.CalendarButton}
      />
      <CalendarButton
          type="outlook"
          className={styles.CalendarButton}
      />
      <CalendarButton
          type="ical"
          className={styles.CalendarButton}
      /> */}
      <CalendarButton
          type="google"
          className={classnames(
              styles.CalendarButton,
              styles.icon_1,
              // ...classNames
          )}
      >
          <CalendarIcon type="google" />
      </CalendarButton>
      {/* <CalendarButton
          type="office365"
          session={session}
          className={classnames(
              styles.CalendarButton,
              styles.icon_2,
              ...classNames
          )}
      >
          Office 365
      </CalendarButton>
      <CalendarButton
          type="ics"
          session={session}
          className={classnames(
              styles.CalendarButton,
              styles.icon_3,
              ...classNames
          )}
      >
          Apple iCal
      </CalendarButton>
      <CalendarButton
          type="ics"
          session={session}
          className={classnames(
              styles.CalendarButton,
              styles.icon_4,
              ...classNames
          )}
      >
          Outlook
      </CalendarButton> */}
    </Popover>
  );
};

export default AddToCalendarPopover;