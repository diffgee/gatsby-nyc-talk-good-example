<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Working with Images in Gatsby
</h1>

This project is the example for my talk about working with images in gatsby. See it hosted on netlify [here](https://naughty-kare-c652c4.netlify.com/).

## Relevant Files

1.  **gatsby-config.js**
    Check out the `plugins` section here to see how you can configure the `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, and `gatsby-source-filesystem` to help you work with images.

2.  **src/pages/index.js**
    Examples of working with fluid images.

3.  **src/pages/art/index.js**
    Basic example of working with fluid images with art direction. But! There is no alt text on the images, so this is a terrible example.

4.  **src/pages/art/better.js**
    Better example of working with fluid images with art direction. We have alt text and captions now.

5.  **src/pages/art/best.js and gatsby-node.js**
    Best example of working with fluid images with art direction. Now our alt text is intrinsically tied to our image when we query it with graphql. This way, we can reuse these images throughout our project and only need to write their captions and alt text once. Nice!
