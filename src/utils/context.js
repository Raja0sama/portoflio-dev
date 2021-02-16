import React, { useContext, useEffect, useState } from "react"

export const GlobalContext = React.createContext({
  pageData: "",
  setPageData: () => {},
})

export const GlobalContextProvider = ({ children }) => {
  const [pageData, setPageData] = useState("")

  return (
    <GlobalContext.Provider value={{ pageData, setPageData }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobal() {
  const { pageData, setPageData } = useContext(GlobalContext)
  return [pageData, setPageData]
}
