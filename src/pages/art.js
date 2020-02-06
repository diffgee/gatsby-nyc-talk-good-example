import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

// const bjorkText = 'Björk is one of the most amazing singers and artists in the world. She is from Iceland and is very cool.'
// const reynisfjaraText = 'Reynisfjara black sand beach, near the town of Vik. Check out the beautiful Reynisdrangar rock formation in the ocean.'
// const skogafossText = 'Skógafoss is one of the most famous waterfalls in Iceland. Make sure you wear a rain poncho when you visit because the mist is powerful.'

export default props => {
  // const [alt, setAlt] = useState('');
  // const [text, setText] = useState('');
  const { reynisfjara, skogafoss, bjork } = props.data;
  const sources = [
    {
      ...bjork.childImageSharp.fluid,
      media: '(max-width: 767px)',
    },
    {
      ...skogafoss.childImageSharp.fluid,
      media: '(min-width: 768px) and (max-width: 1199px)',
    },
    {
      ...reynisfjara.childImageSharp.fluid,
      media: '(min-width: 1200px)',
    },
  ]
  
  return (
    <Layout>
      <SEO title="Reynisfjara and Skógafoss" />
      <h1>See some lovely pictures {':)'}</h1>
      <Img fluid={sources} />
      {/* <Img fluid={sources} onLoad={() => {
        const width = window && window.innerWidth;

        switch(true) {
          case width < 768:
            setAlt('bjork singing');
            setText(bjorkText);
            break;
          
          case width < 1200:
            setAlt('skogafoss waterfall');
            setText(skogafossText);
            break;
          
          default:
            setAlt('reynisfjara black sand beach');
            setText(reynisfjaraText);
        }
      }}/>
      <p>{text}</p> */}
    </Layout>
  )
}

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
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    
    bjork: file(relativePath: { eq: "bjork.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }   
    }
  }
`
