import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import loadable from '@loadable/component'

const AddIcon = loadable(() => import("./AddIcon"))

const AddEvent = () => (
  <a
    className={classnames(
      styles.Event,
      styles.view_emphasized,
    )}
    href="mailto:openui5@sap.com?subject=Add%20event%20to%20openui5.org&body=Title:%0DDate:%0DLocation:%0DURL:"
  >
    <div className={styles.AddEvent}>
      <div className={styles.AddEventIcon}><AddIcon /></div>
      <div className={styles.AddEventTitle}>Add Event</div>
      <div className={styles.AddEventText}>Are you or someone you know speaking about UI5 at an upcoming meetup or conference? Let us know</div>
    </div>
  </a>
);

export default AddEvent;
