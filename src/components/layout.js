import React, {useState} from "react"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import Application from "./application"

const Layout = () => {
  const [index,changeIndex] = useState(0);
  return(
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
        return (<Application images={data.allDropboxNode.edges.map(item=>item.node.localFile.relativePath)}/>
        )
      }}
    />)
}
export default Layout
