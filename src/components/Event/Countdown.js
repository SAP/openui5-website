import React, {useEffect, useState} from "react";
import styles from "./styles.module.css";

const Countdown = ({startDate}) => {
  const [remainTime, setRemainTime] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const remainInSecond = Math.floor((startDate.getTime() - Date.now())/1000);
      if (remainInSecond >= 0) {
        let days = Math.floor(remainInSecond/(60 * 60 * 24))
        let seconds = remainInSecond - days * (60 * 60 * 24)
        let hours = Math.floor(seconds / (60 * 60))
        seconds -= hours * 60 * 60
        let minutes = Math.floor(seconds / 60)
        seconds -= minutes * 60

        const time = [String(hours).padStart(2, '0'), String(minutes).padStart(2, '0'), String(seconds).padStart(2, '0')].join(":");
        if (days > 1 ) {
          setRemainTime(`${days} days, ${time}`);
        } else if (days === 1) {
          setRemainTime(`1 day, ${time}`);
        } else if (startDate.getDate() !== new Date().getDate()) {
          setRemainTime(`Tomorrow, ${time}`)
        } else {
          setRemainTime(`Today, ${time}`);
        }
      } else {
        setRemainTime(null)
        clearInterval(interval);
      }
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, []);

  if (!remainTime) {
      return null;
  }

  return (
    <div className={styles.Countdown}>
      {remainTime}
    </div>
  )
}

export default Countdown;
