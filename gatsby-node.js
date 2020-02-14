const imageConfigs = {
  reynisfjara: {
    alt: "Reynisfjara black sand beach",
    caption:
      "FROM GATSBY-NODE: Reynisfjara black sand beach, near the town of Vik. Check out the beautiful Reynisdrangar rock formation in the ocean.",
  },
  bjork: {
    alt: "Bjork Singing",
    caption:
      "FROM GATSBY-NODE: Björk is one of the most amazing singers and artists in the world. She is from Iceland and is very cool.",
  },
  skogafoss: {
    alt: "Skogafoss Waterfall with green grass",
    caption:
      "FROM GATSBY-NODE: Skógafoss is one of the most famous waterfalls in Iceland. Make sure you wear a rain poncho when you visit because the mist is powerful.",
  },
};

exports.onCreateNode = ({ node, actions }) => {
  if (node.name in imageConfigs) {
    const { createNodeField } = actions;
    createNodeField({
      node,
      name: "alt",
      value: imageConfigs[node.name].alt,
    });
    createNodeField({
      node,
      name: "caption",
      value: imageConfigs[node.name].caption,
    });
  }
};
