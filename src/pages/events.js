import React, {useState} from "react";
import { graphql } from "gatsby";
import _ from "lodash";

import Section from "../components/Section";
import SEO from "../components/seo";
import Text from "../components/Text";
import Event from "../components/Event";
import AddEvent from "../components/Event/AddEvent";
import Grid from "../components/Grid";
import EventPageHeader from "../components/EventPageHeader"


const prepareData = (events) => {
    return events.map(({ node }) => {
        const {
            logo,
            speakers = [],
            startDate,
            endDate,
            ...rest
        } = node.frontmatter;

        let status = "scheduled";
        const currentDate = new Date().getTime();

        if (currentDate > new Date(endDate).getTime()) {
            status = "past";
        } else if (currentDate > new Date(startDate).getTime()) {
            status = "active";
        }

        let id = node.fileAbsolutePath.split("/").pop().split('.').shift();

        return {
            ...rest,
            id,
            startDate,
            endDate,
            status,
            logo: logo?.publicURL,
            description: node.html,
            speakers: speakers.map(speaker => {
                const {
                    photo,
                    ...rest
                } = speaker.frontmatter;

                return {
                    ...rest,
                    photo: photo?.publicURL,
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

    const [selectedTime, setSelectedTime] = useState("userTime")

    const events = prepareData(data.allMarkdownRemark.edges);

    const indexOfPastEvent = events.findIndex(({ status }) => status === "past");
    const upcomingEvents = events.slice(0, indexOfPastEvent).reverse();
    const pastEvents = events.slice(indexOfPastEvent);
    const pastEventByYears = _.groupBy(pastEvents, (event) => new Date(event.startDate).getFullYear());
    const eventYears = Object.keys(pastEventByYears).sort().reverse();

    return (
        <>
            <SEO title={title} />
            <Section>
                <EventPageHeader title={upcomingTitle} selectedTime={selectedTime} onSelectedTimeChange={setSelectedTime} />
                <Grid column="2">
                    {
                        upcomingEvents.map((event) => (
                            <Event
                                key={event.id}
                                emphasized
                                data={event}
                                isLocalTime={selectedTime === "userTime"}
                            />
                        ))
                    }
                    <AddEvent />
                </Grid>
                <div style={{ marginTop: "var(--default-margin)" }}>
                    <Text size="2" style={{ marginBottom: "var(--default-margin-half)" }}>{pastTitle}</Text>
                    {
                        eventYears.map((year) => (
                            <>
                                <Text size="5" style={{ marginBottom: "calc(var(--default-margin)*0.375)", marginTop: "var(--default-margin-half)" }}>{year}</Text>
                                <Grid column="3">
                                    {
                                        pastEventByYears[year].map((event) => <Event key={event.id} data={event} isLocalTime={selectedTime === "userTime"}/>)
                                    }
                                </Grid>
                            </>
                        ))
                    }
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
                        registrationUrl
                    }
                    fileAbsolutePath
                    html
                }
            }
        }
    }
`