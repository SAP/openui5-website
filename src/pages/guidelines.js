import React from "react";
import {graphql} from "gatsby";
import SEO from "../components/seo";
import rehypeReact from "rehype-react"

import Section  from "../components/Section";
import {PrimaryTitle, SecondaryTitle, TertiaryTitle, ColorTable, ColorCell, List, ListItem, Link, Paragraph} from "../components/Guidelines";
import Tile from "../components/Tile";
import Button from "../components/Button";
import Text from "../components/Text";


const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: PrimaryTitle,
    h2: SecondaryTitle,
    h3: TertiaryTitle,
    table: ColorTable,
    td: ColorCell,
    a: Link,
    p: Paragraph,
    list: List,
    listitem: ListItem,
    tile: Tile,
    button: Button,
    text: Text
  },
}).Compiler


const GuidelinesPage = ({data: {markdownRemark}}) => (
    <>
        <SEO title="UI5 Logo Guidelines" />
        <Section>
          {
            renderAst(markdownRemark.htmlAst)
          }
        </Section>
    </>
);

export default GuidelinesPage;

export const query = graphql`
  query {
    markdownRemark (fields: {type: {eq: "page"}}, frontmatter: {name: {eq: "guideline"}}) {
      htmlAst
    }
  }
`