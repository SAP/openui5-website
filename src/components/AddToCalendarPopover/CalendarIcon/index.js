import React from "react";
import styles from "./styles.module.css";
import GoogleIcon from "./images/Google.svg";
import Office365Icon from "./images/Office365.svg";
import OutlookIcon from "./images/Outlook.svg";
import iCalIcon from "./images/iCal.png";

const Icons = {
  google: GoogleIcon,
  office365: Office365Icon,
  outlook: OutlookIcon,
  ical: iCalIcon
};

const Labels = {
  google: "Google",
  office365: "Office 365",
  outlook: "Outlook",
  ical: "iCal"
};

const CalendarIcon = ({ type }) => {
  return (
    <div className={styles.CalendarIcon}>
      <img src={Icons[type]} className={styles.Image} />
      <div className={styles.Label}>{Labels[type]}</div>
    </div>
  );
};

export default CalendarIcon;
