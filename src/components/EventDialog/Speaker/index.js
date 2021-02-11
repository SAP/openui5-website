import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Text from "../../Text";
import Avatar from "../../Avatar";
import styles from "./styles.module.css";
import "@ui5/webcomponents-icons/dist/employee";

const Speaker = (props) => {
  const {
    name,
    company,
    photo,
  } = props;

  return (
    <div className={styles.Speaker}>
      <Avatar
        image={photo}
        icon="employee"
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

Speaker.defaultProps = {
};

Speaker.propTypes = {
};

export default Speaker;
