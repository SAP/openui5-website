import React from "react";

import Button from "../Button";


const Link = ({ children, type, ...props }) => {
    if (type === "button") {
        return (
            <Button
                size="2"
                {...props}
            >{children}</Button>
        )
    }
    return (
        <a{...props}>{children}</a>
    );
};

export default Link;