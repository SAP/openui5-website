import React from "react";
import { graphql } from "gatsby"

import Section from "../components/Section";
import { List, ListItem } from "../components/List";
import Tile from "../components/Tile";
import Button from "../components/Button";
import Text from "../components/Text";

const IndexPage = ({ data: { allFeaturesJson, indexJson } }) => {
    const { startCoding } = indexJson;
    return (
        <>
            <Section>
                <List column="3">
                    { allFeaturesJson.edges.map(({ node }, idx) => {
                        return (
                            <ListItem
                                key={idx}
                            >
                                <Tile
                                    align="center"
                                    title={node.title}
                                    description={node.description}
                                    icon={() => <img src={node.image.publicURL} alt={node.title} height="98" />}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Section>
            <Section color="lightblue" align="center">
                <Text size="1" style={{ marginBottom: "var(--default-margin-half)" }}>{startCoding.title}</Text>
                <Text
                    size="2"
                    font="light"
                    style={{
                        width: "73%",
                        maxWidth: "1024px",
                        margin: "0 auto 30px"
                    }}
                >{startCoding.description}</Text>

                <iframe
                    title={startCoding.title}
                    src="https://codesandbox.io/embed/ui5-example-pglil?fontsize=14&hidenavigation=1&module=%2Fwebapp%2Findex.html&theme=light"
                    style={{
                        width: '100%',
                        height: '500px',
                        marginBottom: 'var(--default-margin)'
                    }}
                    frameBorder="0"
                    allowfullscren="allowfullscren"
                ></iframe>
                {
                    startCoding.button
                    ? (
                        <Button
                            href={startCoding.button.url}
                            rel="noopener"
                            target="_blank"
                            size="2"
                        >{startCoding.button.title}</Button>
                    )
                    : null
                }
            </Section>
        </>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        allFeaturesJson {
            edges {
                node {
                    title,
                    description,
                    image {
                        publicURL
                    }
                }
            }
        }
        indexJson {
            startCoding {
                title
                description
                button {
                    title
                    url
                }
            }
        }
    }
`
