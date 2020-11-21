import React from "react";

const Paragraph = ({ children, ...props }) => {
    return (
        <div{...props}>{children}</div>
    );
};

export default Paragraph;