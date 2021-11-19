import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import loadable from '@loadable/component'
// import formatEventDate from "../../utils/formatEventDate";
// import Button from "../ButtonNew";

import "@ui5/webcomponents-icons/dist/add";

const IconComponent = loadable(() => import("@ui5/webcomponents-react/lib/Icon"), {
  resolveComponent: (components) => components.Icon,
})

// const onClick = () => {
//   alert("open Outlook")
// };

const AddEvent = () => {


  return (
    <a
      className={classnames(
        styles.Event,
        styles.view_emphasized,
      )}
      // onClick={onClick}
      href="mailto:openui5@sap.com?subject=Add%20event%20to%20openui5.org&body=Title:%0DDate:%0DLocation:%0DURL:"
    >
      <div className={styles.AddEvent}>
        <div className={styles.AddEventIcon}><IconComponent name="add" /></div>
        <div className={styles.AddEventTitle}>Add Event</div>
        <div className={styles.AddEventText}>Are you or someone you know speaking about UI5at an upcoming meetup or conference? Let us know</div>
      </div>
    </a>
  );
};

export default AddEvent;
