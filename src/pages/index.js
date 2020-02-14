import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo";
import Layout from "../components/layout";

export const icelandImagesQuery = graphql`
  query {
    allFile(
      filter: {
        relativePath: {
          in: [
            "bjork.jpg"
            "godafoss.jpg"
            "reynisfjara.jpg"
            "skogafoss.jpg"
            "skogafoss-scary.jpg"
            "thorsmork.jpg"
          ]
        }
      }
      sort: { fields: absolutePath }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default props => {
  const fluidImages = props.data.allFile.edges.map(
    edge => edge.node.childImageSharp.fluid
  );

  const [
    bjork,
    godafoss,
    reynsifjara,
    skogafossScary,
    skogafoss,
    thorsMork,
  ] = fluidImages;

  return (
    <Layout>
      <SEO title="Reynisfjara and Skógafoss" />
      <h1>Welcome to Iceland</h1>
      <Img fluid={reynsifjara} alt="Reynisfjara beach" />
      <p>
        Reynisfjara black sand beach, near the town of Vik. Check out the
        beautiful Reynisdrangar rock formation in the ocean.
      </p>
      <Img fluid={skogafoss} alt="Skogafoss waterfall in Southern Iceland" />
      <p>
        Skógafoss is one of the most famous waterfalls in Iceland. Make sure you
        wear a rain poncho when you visit because the mist is powerful.
      </p>
      <div style={{ minHeight: "800vh", background: "grey" }}>
        <p>This is placeholder text to demonstrate lazy loading.</p>
      </div>
      <Img
        fluid={skogafossScary}
        alt="Skogafoss waterfall when viewed from the really scary hill"
      />
      <p>
        You can also view Skogafoss from this scary hill, which you reach the
        top of by climbing a scary staircase, or, "scarecase" if you will.
      </p>
      <Img fluid={bjork} alt="Björk singing" />
      <p>Björk sings very well and writes amazing music.</p>
      <Img fluid={thorsMork} alt="Thorsmork" />
      <p>This is Thorsmork, which means "Valley of Thor".</p>
      <Img fluid={godafoss} alt="Godafoss waterfall" />
      <p>
        This is Godafoss waterfall. The only way to get here is by hiking
        through some really neat fields. People will try to stand on the rocks,
        but they shouldn't.
      </p>
    </Layout>
  );
};
