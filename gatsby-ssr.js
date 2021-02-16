import React from "react"
import RootLayout from "./src/RootLayout"
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
)
