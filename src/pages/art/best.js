import React, { useState } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../../components/seo";
import Layout from "../../components/layout";

export const icelandImagesQuery = graphql`
  query {
    reynisfjara: file(relativePath: { eq: "reynisfjara.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
      fields {
        alt
        caption
      }
    }

    skogafoss: file(relativePath: { eq: "skogafoss.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
      fields {
        alt
        caption
      }
    }

    bjork: file(relativePath: { eq: "bjork.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
      fields {
        alt
        caption
      }
    }
  }
`;

export default props => {
  const [alt, setAlt] = useState("");
  const [caption, setCaption] = useState("");

  const { reynisfjara, skogafoss, bjork } = props.data;
  const sources = [
    {
      ...bjork.childImageSharp.fluid,
      media: "(max-width: 700px)",
    },
    {
      ...skogafoss.childImageSharp.fluid,
      media: "(min-width: 701px) and (max-width: 1000px)",
    },
    {
      ...reynisfjara.childImageSharp.fluid,
      media: "(min-width: 1001px)",
    },
  ];

  return (
    <Layout>
      <SEO title="Reynisfjara and Skógafoss" />
      <h1>See some lovely pictures {":)"}</h1>
      <Img
        fluid={sources}
        alt={alt}
        onLoad={() => {
          const width = window && window.innerWidth;

          if (width < 701) {
            setAlt(bjork.fields.alt);
            setCaption(bjork.fields.caption);
            return;
          }

          if (width < 1001) {
            setAlt(skogafoss.fields.alt);
            setCaption(skogafoss.fields.caption);
            return;
          }

          setAlt(reynisfjara.fields.alt);
          setCaption(reynisfjara.fields.caption);
        }}
      />
      <p>{caption}</p>
    </Layout>
  );
};
