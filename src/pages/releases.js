import React from "react";
import Section from "../components/Section";
import SEO from "../components/seo";
import {graphql} from "gatsby";
import Text from "../components/Text";
import Button from "../components/Button";
import {List, ListItem} from "../components/List";
import Tile from "../components/Tile";
import Icon from "../components/Icon";
import Link from "../components/Link";
import { Table, Row, Cell } from "../components/Table";

const ReleasesPage = ({ data: { releasesJson, allVersionsJson, allConsumeJson, allExploreJson } }) => {
    const lastStableRelease = allVersionsJson.edges.find(({ node }) => !!node.eom).node;

    return (
        <>
            <SEO title={releasesJson.title} />
            <Section>
                <Text size="1">{releasesJson.title}</Text>
            </Section>
            <Section color="lightblue">
                <Button href={lastStableRelease.url_download_runtime} rel="noopener" target="_blank" size="1" style={{ marginRight: "20px" }}>{`Download Stable Release (${lastStableRelease.version})`}</Button>
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
                <Table>
                    <Row type="header">
                        <Cell style={{ width: "120px" }}>Version</Cell>
                        <Cell style={{ width: "300px" }}>Download</Cell>
                        <Cell style={{ width: "200px" }}>Documentation</Cell>
                        <Cell style={{ width: "120px" }}>Release Date</Cell>
                    </Row>
                    { allVersionsJson.edges.map(({ node }, idx) => {
                        const {
                            version,
                            url_download_runtime,
                            url_download_sdk,
                            url_download_mobile,
                            url_demokit,
                            url_releasenotes,
                            release_date
                        } = node;
                        return (
                            <Row key={idx}>
                                <Cell>{version}</Cell>
                                <Cell>
                                    <Link href={url_download_sdk}>SDK</Link><br/>
                                    <Link href={url_download_runtime}>Runtime</Link><br/>
                                    <Link href={url_download_mobile}>Runtime Mobile</Link>
                                </Cell>
                                <Cell>
                                    <Link href={url_demokit}>Demo Kit</Link><br/>
                                    <Link href={url_releasenotes}>Release Notes</Link>
                                </Cell>
                                <Cell>{release_date}</Cell>
                            </Row>
                        );
                    })}
                </Table>
            </Section>
        </>
    );
};

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
                    release_date,
                    eom
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