import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Text from "../../Text";
import Avatar from "../../Avatar";
import styles from "./styles.module.css";

const EventDialog = (props) => {
  const {
    name,
    company,
    photo,
  } = props;

  return (
    <div className={styles.Speaker}>
      <Avatar
        image={photo}
        className={styles.Avatar}
      />
      <div className={styles.Content}>
        <Text weight="bold">{name}</Text>
        <div className={styles.Company}>{company}</div>
      </div>
      <div className={styles.Social}></div>
    </div>
  );
};

EventDialog.defaultProps = {
};

EventDialog.propTypes = {
};

export default EventDialog;
