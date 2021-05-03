import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "../Link";


const Paragraph = ({ children }) => (
    <>
        {children}
    </>
);

export default ({ source }) => {
    return (
        <ReactMarkdown
            allowedElements={[
                "a",
                "p",
            ]}
            components={{
                a: Link,
                p: Paragraph,
            }}
        >
            {source}
        </ReactMarkdown>
    )
};