import React, { Component, useEffect } from "react"
import { GlobalContextProvider } from "./utils/context"
import { THEMEContextProvider } from "./utils/theme"

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   var Tawk_API = Tawk_API || {},
  //     Tawk_LoadStart = new Date()
  //   ;(function () {
  //     var s1 = document.createElement("script"),
  //       s0 = document.getElementsByTagName("script")[0]
  //     s1.async = true
  //     s1.src = "https://embed.tawk.to/5d151b9553d10a56bd7c35f0/default"
  //     s1.charset = "UTF-8"
  //     s1.setAttribute("crossorigin", "*")
  //     s0.parentNode.insertBefore(s1, s0)
  //   })()
  // }, [])
  return (
    <>
      <THEMEContextProvider>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </THEMEContextProvider>
    </>
  )
}
