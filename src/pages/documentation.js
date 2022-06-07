import React from "react";
import {graphql} from "gatsby";
import Section  from "../components/Section";
import SEO from "../components/seo";
import Documentation from "../components/Documentation";
import Text from "../components/Text";
import { List, ListItem } from "../components/List";
import Tile from "../components/Tile";
import Icon from "../components/Icon";
import Link from "../components/Link";


const DocumentationPage = ({ data: { documentationJson, allLinksJson } }) => (
    <>
        <SEO title={documentationJson.title} />
        <Section>
            <Text size="1">{documentationJson.title}</Text>
        </Section>
        <Section color="lightblue">
            <Documentation />
        </Section>
        <Section>
            <List column="3">
                { allLinksJson.edges.map(({ node }, idx) => {
                    const { title, icon, links } = node;
                    return (
                        <ListItem key={idx}>
                            <Tile
                                type="documentation"
                                title={title}
                                icon={() => <Icon size="96x96" src={icon.publicURL} />}
                            />
                            <List column="1">
                                { links.map((options, idx) => (
                                    <ListItem key={idx}>
                                        <Tile
                                            type="article"
                                            {...options}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </ListItem>
                    );
                })}
            </List>
        </Section>
        <Section color="lightblue">
            <Text size="3" style={{ marginBottom: "calc(var(--default-margin)/4)" }}><Link href="https://sdk.openui5.org/#/topic/5982a9734748474aa8d4af9c3d8f31c0">OpenUI5 vs SAPUI5</Link></Text>
            <div style={{ maxWidth: "700px" }}>OpenUI5 is the open source version of SAPUI5, a JavaScript UI library maintained by SAP. Since OpenUI5 shares the same core as SAPUI5, we often refer to both simply as "UI5".</div>
        </Section>
    </>
);

export default DocumentationPage;

export const query = graphql`
    query {
        documentationJson {
            title
        }
        allLinksJson {
            edges {
                node {
                    title,
                    icon {
                        publicURL
                    },
                    links {
                        title,
                        description,
                        url
                    }
                }
            }
        }
    }
`