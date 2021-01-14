import React from "react";
import { graphql } from "gatsby";

import Section from "../components/Section";
import SEO from "../components/seo";
import Text from "../components/Text";
import Event from "../components/Event";
import { List, ListItem } from "../components/List";



const CommunityPage = ({ data: { eventsJson: { title, upcomingTitle, pastTitle } } }) => (
    <>
        <SEO title={title} />
        <Section>
            <Text size="1" style={{ marginBottom: "var(--default-margin-half)" }}>{upcomingTitle}</Text>
            <div style={{ width: "45%" }}>
                <Event
                    emphasized
                    title="UI5ers live #04"
                    description="30-minute interactive webcast"
                    date="<b>January 14, 2021,</b> 15:15 — 15:45 CET"
                    location="Online"
                    logo="..."
                    showAddToCalendar={true}
                />
            </div>
            <div style={{ marginTop: "80px" }}>
                <Text size="2" style={{ marginBottom: "var(--default-margin-half)" }}>{pastTitle}</Text>
                <List column="3" justifyContent="spaceBetween">
                    <ListItem>
                        <Event
                            title="UI5ers live #03"
                            description="30-minute interactive webcast"
                            date="December 10"
                            location="Online"
                            logo="..."
                        />
                    </ListItem>
                    <ListItem>
                        <Event
                            title="UI5ers live #02"
                            description="30-minute interactive webcast"
                            date="November 12"
                            location="Online"
                            logo="..."
                        />
                    </ListItem>
                    <ListItem>
                        <Event
                            title="UI5ers live #01"
                            description="30-minute interactive webcast"
                            date="October 15"
                            location="Online"
                            logo="..."
                        />
                    </ListItem>
                    <ListItem>
                        <Event
                            title="UI5con ON AIR 2020"
                            date="July 9-10"
                            location="Online"
                            logo="..."
                        />
                    </ListItem>
                </List>
            </div>
        </Section>
    </>
);

export default CommunityPage;

export const query = graphql`
    query {
        eventsJson {
            title
            upcomingTitle
            pastTitle
        }
    }
`