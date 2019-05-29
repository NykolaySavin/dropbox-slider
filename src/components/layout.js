import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import Application from "./application"

const Layout = () => {
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
        return (<Application images={shuffle(data.allDropboxNode.edges.map(item=>item.node.localFile.relativePath))}/>
        )
      }}
    />)
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
export default Layout
