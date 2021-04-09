import React, { Fragment } from "react";
import {graphql} from "gatsby";

import Section from "../components/Section";
import SEO from "../components/seo";
import Text from "../components/Text";
import { List, ListItem } from "../components/List";
import Tile from "../components/Tile";
import Icon from "../components/Icon";


const CommunityPage = ({ data: { communityJson: { title, channels, connect }, allEventsJson } }) => (
    <>
        <SEO title={title} />
        <Section>
            <Text size="1" style={{ marginBottom: "var(--default-margin-half)" }}>{title}</Text>
            {
                channels.map(({title, items}, idx, source) => {
                    const listStyle = {
                        justifyContent: "flex-start"
                    };

                    if (idx + 1 === source.length) {
                        listStyle.marginBottom = "calc(-1 * var(--default-margin-half))";
                    }

                    return (
                        <Fragment key={idx}>
                            <Text size="2" style={{ marginBottom: "var(--default-margin-half)" }}>{title}</Text>
                            <List style={listStyle}>
                                {
                                    items.map((item, idx) => {
                                        const { icon, ...rest } = item;
                                        return (
                                            <ListItem
                                                key={idx}
                                                style={{
                                                    flexBasis: "170px",
                                                    marginRight: "var(--default-margin-half)",
                                                    marginBottom: "var(--default-margin-half)",
                                                }}
                                            >
                                                <Tile
                                                    icon={() => <Icon size="120x120" src={icon.publicURL} />}
                                                    align="center"
                                                    {...rest}
                                                />
                                            </ListItem>
                                        );
                                    })
                                }
                            </List>
                        </Fragment>
                    );
                })
            }
        </Section>
        <Section>
            <Text size="2" style={{ marginBottom: "var(--default-margin-half)" }}>{connect.title}</Text>
            <List column="3" justifyContent="spaceBetween">
                { connect.items.map(({ icon, ...rest }, idx) => {
                    return (
                        <ListItem key={idx}>
                            <Tile
                                icon={() => <Icon size="96x96" src={icon.publicURL} />}
                                {...rest}
                            />
                        </ListItem>
                    );
                })}
            </List>
        </Section>
    </>
);

export default CommunityPage;

export const query = graphql`
    query {
        communityJson {
            title
            channels {
                title
                items {
                    title
                    url
                    icon {
                        publicURL
                    }
                }
            }
            connect {
                title
                items {
                    title
                    description
                    url
                    icon {
                        publicURL
                    }
                }
            }
        }
    }
`