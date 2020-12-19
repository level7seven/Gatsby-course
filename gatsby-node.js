const path = require("path");
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`./src/templates/postTemplate.js`);
  const result = await graphql(`
    query {
      allDatoCmsArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  result.data.allDatoCmsArticle.edges.forEach(({ node }) => {
    // const slug = slugify(node.frontmatter.title, {
    //   lower: true,
    // });

    const { slug } = node;

    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        slug,
      },
    });
  });
};
