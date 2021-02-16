import React from "react"

export const Button = ({ children }) => {
  return (
    <div
      style={{
        background: "#6E00FF",
        margin: "5px 5px",
        padding: "10px 20px",
        borderRadius: 20,
        paddingTop: 12,
        boxShadow: "0px 0px 22px -5px #6E00FF",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  )
}

export const ButtonOutline = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #6E00FF",
        padding: "10px 20px",
        borderRadius: 20,
        margin: "0 5px",
        paddingTop: 12,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  )
}

export const PlayButton = ({ Play }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: -51,
        top: 0,
        bottom: 0,
        display: "flex",
      }}
    >
      <img
        style={{
          alignItems: "center",
          cursor: "pointer",
          margin: "auto",
        }}
        src={Play}
      />
    </div>
  )
}
