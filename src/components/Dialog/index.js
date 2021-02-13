import React, { useRef, useState, useEffect, useCallback } from "react";
import { Dialog as Ui5Dialog } from "@ui5/webcomponents-react/lib/Dialog";
import classnames from "classnames";
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import "@ui5/webcomponents-icons/dist/decline";
import styles from "./styles.module.css";

const Dialog = (props) => {
  const {
    isOpen,
    className,
    onAfterOpen,
    onAfterClose,
    children,
    ...rest
  } = props;

  const [classNamesList, setClassNamesList] = useState([styles.Dialog]);
  const ref = useRef();

  const _onAfterOpen = () => {
    setClassNamesList([...classNamesList, styles.state_open]);
    onAfterOpen();
  };

  const _onAfterClose = () => {
    setClassNamesList(classNamesList.filter((className) => className !== styles.state_open));
    onAfterClose();
  };

  const onCloseButton = useCallback(
    () => ref.current.close(),
    [ref]
  );


  useEffect(async () => {
    if (ref.current) {
      if (isOpen) {
        ref.current.open();
        const overlayRef = await ref.current.getStaticAreaItemDomRef();
        const onOverlayClick = () => ref.current.close();
        overlayRef.addEventListener("click", onOverlayClick);
        return () => {
          overlayRef.removeEventListener("click", onOverlayClick);
        };
      } else {
        ref.current.close();
      }
    }
  }, [isOpen, ref]);

  return (
    <Ui5Dialog
      className={classnames(
        ...className.split(" "),
        ...classNamesList
      )}
      header={null}
      footer={null}
      ref={ref}
      onAfterOpen={_onAfterOpen}
      onAfterClose={_onAfterClose}
      shouldHideBackdrop={isOpen}
      {...rest}
    >
      <div className={styles.CloseButton} onClick={onCloseButton}><Icon name="decline" /></div>
      <div className={styles.Content}>
        {children}
      </div>
    </Ui5Dialog>
  );
};

Dialog.defaultProps = {
  className: "",
  onAfterOpen: () => {},
  onAfterClose: () => {},
}

export default Dialog;
