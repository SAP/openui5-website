import React from "react";
import Section from "../components/Section";
import SEO from "../components/seo";
import Text from "../components/Text";
import { graphql } from "gatsby";
import { List, ListItem } from "../components/List";
import Tile from "../components/Tile";
import Icon from "../components/Icon";
import Button from "../components/Button";

const ProjectsPage = ({ data: { projectsJson, allOfficialProjectsJson, allCommunityProjectsJson, file } }) => (
    <>
        <SEO title={projectsJson.title} />
        <Section>
            <Text size="1" style={{ marginBottom: "var(--default-margin-half)" }}>{projectsJson.title}</Text>
            <Text size="2" style={{ marginBottom: "var(--default-margin-half)" }}>Official Projects</Text>
            <List column="3" justifyContent="spaceBetween">
                { allOfficialProjectsJson.edges.map(({ node }, idx) => {
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
            <Button
                href="https://github.com/SAP?utf8=%E2%9C%93&q=openui5"
                size="2"
                style={{
                    marginTop: "var(--default-margin-half)",
                    marginBottom: "var(--default-margin)"
                }}
            >Browse All Official Projects</Button>

            <Text size="2" style={{ marginBottom: "var(--default-margin-half)" }}>Community Projects</Text>
            <List column="3" justifyContent="spaceBetween">
                { allCommunityProjectsJson.edges.map(({ node }, idx) => {
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
            <Button
                href="https://github.com/SAP/openui5-website/blob/master/docs/CommunityProjects.md"
                size="2"
                style={{
                    marginTop: "var(--default-margin-half)",
                }}
            >Explore More Community Projects</Button>
        </Section>
        <Section color="lightblue">
            <List column="3" justifyContent="spaceBetween">
                <ListItem>
                    <Tile
                        title="Add a new project"
                        description="You have an open source project that extends or contributes to OpenUI5? Feel free to share it here!"
                        url="https://github.com/SAP/openui5-website/tree/master/docs/CommunityProjects.md"
                        icon={() => <Icon size="96x96" src={file.publicURL} imgStyle={{ width: "96px", height: "96px" }} />}
                    />
                </ListItem>
            </List>
        </Section>
    </>
);

export default ProjectsPage;

export const query = graphql`
    query {
        projectsJson {
            title
        }
        allOfficialProjectsJson {
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
        allCommunityProjectsJson {
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
        file (name: { eq: "add" }) {
            publicURL
        }
    }
`
