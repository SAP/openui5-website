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
            source={source}
            allowedTypes={[
                "text",
                "link",
                "paragraph",
            ]}
            renderers={{
                link: Link,
                paragraph: Paragraph,
            }}
        />
    )
};