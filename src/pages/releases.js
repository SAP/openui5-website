import React from "react";
import DefaultTemplate from "../templates/default";
import Section from "../components/Section";
import SEO from "../components/seo";
import {graphql} from "gatsby";
import Text from "../components/Text";
import Button from "../components/Button";
import {List, ListItem} from "../components/List";
import Tile from "../components/Tile";
import Icon from "../components/Icon";

const ReleasesPage = ({ data: { releasesJson, allConsumeJson, allExploreJson } }) => (
    <DefaultTemplate>
        <SEO title={releasesJson.title} />
        <Section>
            <Text size="1">{releasesJson.title}</Text>
        </Section>
        <Section color="lightblue">
            <Button href="https://openui5.hana.ondemand.com/" rel="noopener" target="_blank" size="1" style={{ marginRight: "20px" }}>Download Stable Release (1.71.1)</Button>
            <Button href="https://openui5nightly.hana.ondemand.com/" rel="noopener" target="_blank" size="1">Browse Nightly Demo Kit</Button>
        </Section>
        <Section>
            <Text size="2" style={{ marginBottom: "var(--default-margin-half)" }}>Consume</Text>
            <List column="3" justifyContent="spaceBetween">
                { allConsumeJson.edges.map(({ node }, idx) => {
                    const { icon, ...rest } = node;
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
        <Section>
            <Text size="2" style={{ marginBottom: "var(--default-margin-half)" }}>Explore</Text>
            <List column="3">
                { allExploreJson.edges.map(({ node }, idx) => {
                    const { icon, ...rest } = node;
                    return (
                        <ListItem key={idx}>
                            <Tile
                                icon={() => <Icon size="96x96" src={icon.publicURL} />}
                                {...rest}
                            />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Section>
        <Section>
            <Text size="2" style={{ marginBottom: "var(--default-margin-half)" }}>All Releases</Text>

        </Section>
    </DefaultTemplate>
);

export default ReleasesPage;

export const query = graphql`
    query {
        releasesJson {
            title
        }
        allVersionsJson {
            edges {
                node {
                    version,
                    url_download_runtime,
                    url_download_sdk,
                    url_download_mobile,
                    url_demokit,
                    url_releasenotes,
                    release_date
                }
            }
        }
        allConsumeJson {
            edges {
                node {
                    title,
                    description,
                    url,
                    icon {
                        publicURL
                    }
                }
            }
        }
        allExploreJson {
            edges {
                node {
                    title,
                    description,
                    url,
                    icon {
                        publicURL
                    }
                }
            }
        }
    }
`