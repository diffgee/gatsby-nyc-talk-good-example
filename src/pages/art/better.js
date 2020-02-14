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
    }

    skogafoss: file(relativePath: { eq: "skogafoss.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bjork: file(relativePath: { eq: "bjork.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
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

  const bjorkCaption =
    "Björk is one of the most amazing singers and artists in the world. She is from Iceland and is very cool.";
  const reynisfjaraCaption =
    "Reynisfjara black sand beach, near the town of Vik. Check out the beautiful Reynisdrangar rock formation in the ocean.";
  const skogafossCaption =
    "Skógafoss is one of the most famous waterfalls in Iceland. Make sure you wear a rain poncho when you visit because the mist is powerful.";

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
            setAlt("bjork singing");
            setCaption(bjorkCaption);
            return;
          }

          if (width < 1001) {
            setAlt("skogafoss waterfall");
            setCaption(skogafossCaption);
            return;
          }

          setAlt("reynisfjara black sand beach");
          setCaption(reynisfjaraCaption);
        }}
      />
      <p>{caption}</p>
    </Layout>
  );
};

// ? with custom fields query
// export const icelandImagesQuery = graphql`
//   query {
//     reynisfjara: file(relativePath: { eq: "reynisfjara.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//       fields {
//         alt
//         caption
//       }
//     }

//     skogafoss: file(relativePath: { eq: "skogafoss.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//       fields {
//         alt
//         caption
//       }
//     }

//     bjork: file(relativePath: { eq: "bjork.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 700) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//       fields {
//         alt
//         caption
//       }
//     }
//   }
// `;

// ? captions and useState()
// const bjorkCaption =
//   "Björk is one of the most amazing singers and artists in the world. She is from Iceland and is very cool.";
// const reynisfjaraCaption =
//   "Reynisfjara black sand beach, near the town of Vik. Check out the beautiful Reynisdrangar rock formation in the ocean.";
// const skogafossCaption =
//   "Skógafoss is one of the most famous waterfalls in Iceland. Make sure you wear a rain poncho when you visit because the mist is powerful.";
// const [alt, setAlt] = useState("");
// const [caption, setCaption] = useState("");

// ? with alt and caption
//  <Img
// fluid={sources}
// alt={alt}
// onLoad={() => {
//   const width = window && window.innerWidth;

// if (width < 701) {
//   setAlt("bjork singing");
//   setCaption(bjorkCaption);
//   return;
// }

// if (width < 1001) {
//   setAlt("skogafoss waterfall");
//   setCaption(skogafossCaption);
//   return;
// }

// setAlt("reynisfjara black sand beach");
// setCaption(reynisfjaraCaption);
// }}
// />
// <p>{caption}</p>

// ? with nodes
// if (width < 701) {
//   setAlt(bjork.fields.alt);
//   setCaption(bjork.fields.caption);
//   return;
// }

// if (width < 1001) {
//   setAlt(skogafoss.fields.alt);
//   setCaption(skogafoss.fields.caption);
//   return;
// }

// setAlt(reynisfjara.fields.alt);
// setCaption(reynisfjara.fields.caption);
