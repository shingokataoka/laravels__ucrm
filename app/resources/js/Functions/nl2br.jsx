import React from "react"
export default function nl2br(str) {
    const texts = str.split(/(\n)/).map((item, index) => {
      return (
        <React.Fragment key={index}>
          { item.match(/\n/) ? <br /> : item }
        </React.Fragment>
      )
    })
    return texts
  }
