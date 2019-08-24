import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default props => {
  const [reynsifjara, skogafoss] = props.data.allFile.edges.map(
    edge => edge.node.childImageSharp.fluid
  )
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
    </Layout>
  )
}

export const icelandImagesQuery = graphql`
  query {
    allFile(
      filter: { relativePath: { in: ["reynisfjara.jpg", "skogafoss.jpg"] } }
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
`
