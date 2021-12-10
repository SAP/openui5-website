import React from "react";
import ToggleButton from "../ToggleButton";
import Text from "../Text";
import styles from "./styles.module.css";


const EventPageHeader = ({title, selectedTime, onSelectedTimeChange}) => {
  let userOffest = new Date().getTimezoneOffset() / -60
  const berlinOffset = new Date().toLocaleDateString("en-us", {timeZone: 'Europe/Berlin', timeZoneName: 'short'}).split('GMT')[1]
  const timeButtons = [{
      key: "userTime",
      title: "Your time",
      subtitle: `(UTC${userOffest < 0 ? "" : "+"}${userOffest})`
  }, {
      key: "eventTime",
      title: "Berlin time",
      subtitle: `(UTC${berlinOffset})`
  },]

  return (
    <div className={styles.pageHeader}>
      <Text size="1" style={{ marginBottom: "var(--default-margin-half)" }}>{title}</Text>
      <ToggleButton buttons={timeButtons} selectedKey={selectedTime} onClick={onSelectedTimeChange} verticalAlign={true} classNames={styles.toggle}/>
    </div>
  )
};

export default EventPageHeader;
