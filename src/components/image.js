import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      return(<Img fluid={fluid}  />)
    } }
  />
)
export default Image
