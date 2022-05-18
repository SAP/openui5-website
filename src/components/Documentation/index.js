import React from "react";
import styles from "./styles.module.css";
import Link from "../Link";
import Button from "../Button";

const Documentation = () => {
    return (
        <div className={styles.Documentation}>
            <div className={styles.Documentation__col1}>
                <div className={styles.Documentation__title}>The Demo Kit is the central place to understand and learn OpenUI5</div>
                <div className={styles.Documentation__text}>
                    It contains the official <Link href="https://sdk.openui5.org/#/topic" target="_blank" rel="noopener">documentation</Link>,
                    &nbsp;<Link href="https://sdk.openui5.org/#/api" target="_blank" rel="noopener">the API Reference</Link>,
                    &nbsp;as well as <Link href="https://sdk.openui5.org/#/controls" target="_blank" rel="noopener">code samples</Link>
                    &nbsp;for many UI controls to demonstrate their use.
                </div>
                <Button href="https://sdk.openui5.org/" rel="noopener" target="_blank" size="2">Browse Demo Kit</Button>
            </div>
            <div className={styles.Documentation__col2}></div>
        </div>
    );
};


export default Documentation;