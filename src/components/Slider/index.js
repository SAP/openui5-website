import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import styles from "./styles.module.css";

const slides = [
  {
    url: "/ui5con/germany2022/",
    className: styles.mod_germany2022,
  }
];

const INVISIBLE_CLASS = styles.state_invisible;

const Slider = () => {
  const [ activeItem, setActiveItem ] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const intervalId = 	window.setInterval(() => {
      setActiveItem((activeItem) => {
        let nextItem = activeItem + 1;
        if (nextItem >= slides.length) {
          nextItem = 0;
        }
        return nextItem;
      });
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.Slider}>
      {
        slides.map((slide, idx) => (
          <Link
            target="_blank"
            key={idx}
            to={slide.url}
            className={classnames(
              styles.SliderItem,
              slide.className,
              idx === activeItem ? null : INVISIBLE_CLASS,
            )}
          />
        ))
      }
    </div>
  );
};


export default Slider;
