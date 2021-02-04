import React, { useRef, useEffect, useState } from "react";
import { Popover as Ui5Popover } from "@ui5/webcomponents-react/lib/Popover";
import { PopoverPlacementType } from "@ui5/webcomponents-react/lib/PopoverPlacementType";
import classnames from "classnames";
import styles from "./styles.module.css";

const Popover = ({
  isOpen,
  targetRef,
  placementType,
  className = "",
  onAfterOpen = () => {},
  onAfterClose = () => {},
  children,
  ...props
}) => {
  const ref = useRef();
  const [classNameList, setClassNameList] = useState([styles.Popover]);

  const _onAfterOpen = () => {
    setClassNameList([...classNameList, styles.state_open]);
    onAfterOpen();
  };

  const _onAfterClose = () => {
    setClassNameList(classNameList.filter((className) => className !== styles.state_open));
    onAfterClose();
  };

  useEffect(() => {
    const popoverNode = ref.current;

    if (popoverNode) {
      if (isOpen) {
        popoverNode.openBy(targetRef);
      } else {
        popoverNode.close();
      }
    }
  }, [isOpen, targetRef]);

  console.log("isOpen => ", isOpen);

  return isOpen ? (
    <Ui5Popover
      ref={ref}
      onAfterOpen={_onAfterOpen}
      onAfterClose={_onAfterClose}
      className={classnames(...classNameList, ...className.split(" "))}
      placementType={PopoverPlacementType[placementType]}
      {...props}
    >
      {children}
    </Ui5Popover>
  ) : null;
};

export default Popover;
