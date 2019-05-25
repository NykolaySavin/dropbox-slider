import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */
const getFileName = (src)=>src.split('/').pop();
const Image = (src) => (
  <StaticQuery
    query={graphql`
     query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
    `}
    render={data =>{
      const fluid = data.allImageSharp.edges.find((element) => getFileName( element.node.fluid.src)===getFileName( src.src)).node.fluid
      return(<Img fluid={fluid} />)
    } }
  />
)
export default Image
