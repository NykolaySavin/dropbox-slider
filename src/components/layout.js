/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import Image from './image';

const Layout = () => (
  <StaticQuery
    query={graphql`
      query {
        allDropboxNode {
          edges {
            node {
              localFile {
                relativePath
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{data.allDropboxNode.edges.map(item=><Image key={item.node.localFile.relativePath} src={item.node.localFile.relativePath}/>)}</main>
          </div>
        </>
      )
    }}
  />
)
export default Layout
