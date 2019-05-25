import React, { useState, useEffect } from "react"
import Image from "./image"

const getFileName = (src)=>src.split('/').pop();
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
        <div
          className="option"
          onClick={() =>
            changeInterval(
              intervalTime == 10000
                ? 20000
                : intervalTime == 20000
                ? 30000
                : intervalTime == 30000
                ? 60000
                : 10000
            )
          }
        >
          <div className="option-header">Timing</div>
          <div>{intervalTime / 1000} seconds</div>
        </div>
        <div className="option" onClick={() => changeCaptionUse(!caption)}>
          <div className="option-header">Caption</div>
          <div>{caption ? "on" : "off"}</div>
        </div>
      </div>
      <div className="content">{<Image src={images[index]} />}</div>
      <div className="output">
        {caption && (
          <div className="option">
            <div className="option-header" >Caption:</div>
            <div>{getFileName(images[index])} </div>
          </div>
        )}
      </div>
    </div>
  )
}