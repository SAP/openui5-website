import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Popover as Ui5Popover } from "@ui5/webcomponents-react/lib/Popover";
import { PopoverPlacementType } from "@ui5/webcomponents-react/lib/PopoverPlacementType";
import classnames from "classnames";
import getPortalNode from "../../utils/getPortalNode";
import styles from "./styles.module.css";

const PORTAL_ID = "app-popovers";

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

  return (
      ReactDOM.createPortal(
        <>
          {
            isOpen
            ? (
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
            )
            : null
          }
        </>,
        getPortalNode(PORTAL_ID)
      )
  );
};

export default Popover;
