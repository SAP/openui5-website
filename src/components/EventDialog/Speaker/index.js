import React from "react";
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
    twitter,
    linkedin,
    github,
    mastodon,
    bluesky,
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
      <div className={styles.Social}>
        {
          github
          ? (
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              className={classnames(
                styles.Icon,
                styles.view_github,
              )}
            ></a>
          )
          : null
        }
        {
          linkedin
          ? (
            <a
              href={`https://linkedin.com/in/${linkedin}`}
              target="_blank"
              className={classnames(
                styles.Icon,
                styles.view_linkedin,
              )}
            ></a>
          )
          : null
        }
        {
          twitter
          ? (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              className={classnames(
                styles.Icon,
                styles.view_twitter,
              )}
            ></a>
          )
          : null
        }
        {
          mastodon
          ? (
            mastodon.split('@').length > 1 
            ? (
              <a
              href={`https://${mastodon.split('@').filter(part => part !== '')[1]}/@${mastodon.split('@').filter(part => part !== '')[0]}`}
              target="_blank"
              className={classnames(
                styles.Icon,
                styles.view_mastodon,
              )}
              ></a>              
            ) : (
              <a
              href={`https://mastodon.online/@${mastodon}`}
              target="_blank"
              className={classnames(
                styles.Icon,
                styles.view_mastodon,
              )}
            ></a>
            )
          )
          : null
        }  
        {
          bluesky
          ? (
            bluesky.includes(".") 
            ? (
              <a
              href={`https://bsky.app/profile/${bluesky}`}
              target="_blank"
              className={classnames(
                styles.Icon,
                styles.view_bluesky,
              )}
            ></a>
            ) : (
              <a
              href={`https://bsky.app/profile/${bluesky}.bsky.social`}
              target="_blank"
              className={classnames(
                styles.Icon,
                styles.view_bluesky,
              )}
            ></a>
            )
          )
          : null
        }             
      </div>
    </div>
  );
};

export default Speaker;
