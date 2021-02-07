import React from "react";
import { graphql } from "gatsby";

import Section from "../components/Section";
import SEO from "../components/seo";
import Text from "../components/Text";
import Event from "../components/Event";
import { List, ListItem } from "../components/List";

const prepareData = (events) => {
    return events.map(({ node }) => {
        const {
            logo,
            ...rest
        } = node.frontmatter;

        return ({
            ...rest,
            logo: logo && logo.publicURL || null,
            description: node.html
        })
    });
};

const CommunityPage = ({ data }) => {
    const {
        title,
        upcomingTitle,
        pastTitle
    } = data.eventsJson;

    const events = prepareData(data.allMarkdownRemark.edges);

    const upcomingEvents = events.slice(0, 1);
    const pastEvents = events.slice(1);

    return (
        <>
            <SEO title={title} />
            <Section>
                <Text size="1" style={{ marginBottom: "var(--default-margin-half)" }}>{upcomingTitle}</Text>
                <List column="2" justifyContent="spaceBetween">
                    {
                        upcomingEvents.map((event) => (
                            <ListItem>
                                <Event
                                    emphasized
                                    showAddToCalendar={true}
                                    {...event}
                                />
                            </ListItem>
                        ))
                    }
                </List>
                <div style={{ marginTop: "80px" }}>
                    <Text size="2" style={{ marginBottom: "var(--default-margin-half)" }}>{pastTitle}</Text>
                    <List column="3" justifyContent="spaceBetween">
                        {
                            pastEvents.map((event) => (
                                <ListItem>
                                    <Event
                                        {...event}
                                    />
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
            </Section>
        </>
    );
};

export default CommunityPage;

export const query = graphql`
    query {
        eventsJson {
            title
            upcomingTitle
            pastTitle
        }
        allMarkdownRemark(
            sort: {
            order: DESC,
            fields: [frontmatter___startDate]
            },
            filter: {
            fields: {
                type: {
                eq: "event"
                }
            }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        subTitle
                        logo {
                            publicURL
                        }
                        startDate
                        endDate
                        location
                        speakers {
                            ... on MarkdownRemark {
                                frontmatter {
                                    name
                                    company
                                    twitter
                                    github
                                    linkedin
                                    photo {
                                        publicURL
                                    }
                                }
                                html
                            }
                        }
                        joinUrl
                        recordingUrl
                    }
                    html
                }
            }
        }
    }
`