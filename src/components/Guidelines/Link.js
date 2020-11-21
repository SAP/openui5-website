import React from "react";

import Button from "../Button";
import Link from "../Link";


const GuidelinesLink = ({ children, type, ...props }) => {
    if (type === "button") {
        return (
            <Button
                size="2"
                {...props}
            >{children}</Button>
        )
    }
    return (
        <Link{...props}>{children}</Link>
    );
};

export default GuidelinesLink;
