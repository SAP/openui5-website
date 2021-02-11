import React from "react";
import { graphql } from "gatsby";

import Section from "../components/Section";
import SEO from "../components/seo";
import Text from "../components/Text";
import Event from "../components/Event";
import Grid from "../components/Grid";


const prepareData = (events) => {
    return events.map(({ node }) => {
        const {
            logo,
            speakers = [],
            ...rest
        } = node.frontmatter;

        return {
            ...rest,
            logo: logo && logo.publicURL || null,
            description: node.html,
            speakers: speakers.map(speaker => {
                const {
                    photo,
                    ...rest
                } = speaker.frontmatter;

                return {
                    ...rest,
                    photo: photo && photo.publicURL || null,
                    description: speaker.html,
                };
            })
        };
    });
};

const EventsPage = ({ data }) => {
    const {
        title,
        upcomingTitle,
        pastTitle
    } = data.eventsJson;

    const events = prepareData(data.allMarkdownRemark.edges);

    const upcomingEvents = events.slice(0, 2);
    const pastEvents = events.slice(2);

    return (
        <>
            <SEO title={title} />
            <Section>
                <Text size="1" style={{ marginBottom: "var(--default-margin-half)" }}>{upcomingTitle}</Text>
                <Grid column="2">
                    {
                        upcomingEvents.map((event, key) => (
                            <Event
                                key={key}
                                emphasized
                                showAddToCalendar={true}
                                data={event}
                            />
                        ))
                    }
                </Grid>
                <div style={{ marginTop: "80px" }}>
                    <Text size="2" style={{ marginBottom: "var(--default-margin-half)" }}>{pastTitle}</Text>
                    <Grid column="3">
                        {
                            pastEvents.map((event, key) => <Event key={key} data={event} />)
                        }
                    </Grid>
                </div>
            </Section>
        </>
    );
};

export default EventsPage;

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
                        external
                        logo {
                            publicURL
                        }
                        startDate
                        endDate
                        location
                        speakers {
                            ...on MarkdownRemark {
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
                        url
                        recordingUrl
                    }
                    html
                }
            }
        }
    }
`