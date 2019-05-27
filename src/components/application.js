import React, { useState, useEffect } from "react"
import Image from "./image"
import TextBox from "./textbox"

const getFileName = src => src.split("/").pop()
export default function Application({ images }) {
  const [index, changeIndex] = useState(0)
  const [intervalTime, changeInterval] = useState(10000)
  const [caption, changeCaptionUse] = useState(true)
  useEffect(() => {
    const interval = setInterval(
      () => changeIndex(index >= images.length - 1 ? 0 : index + 1),
      intervalTime
    )
    return () => clearInterval(interval)
  })
  return (
    <div className="main">
      <div className="options">
        <h1>Options</h1>
        <TextBox
          header={"Timing"}
          onClick={() =>
            changeInterval(
              intervalTime === 10000
                ? 20000
                : intervalTime === 20000
                ? 30000
                : intervalTime === 30000
                ? 60000
                : 10000
            )
          }
          content={`${intervalTime / 1000} seconds`}
        />
        <TextBox
          header={"Caption"}
          onClick={() => changeCaptionUse(!caption)}
          content={caption ? "on" : "off"}
        />
      </div>
      <div className="content" onClick={()=> changeIndex(index >= images.length - 1 ? 0 : index + 1)}><div className="img">{<Image src={images[index]} />}</div></div>
      <div className="output">
        <h1>Outputs</h1>
        {caption && (
          <TextBox
            header={"Caption:"}
            content={getFileName(images[index])}
          />
        )}
      </div>
    </div>
  )
}
