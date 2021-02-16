import React, { useContext, useEffect, useState } from "react"
import THEMEJSON from "../theme.json"
const THEME = ["light", "dark"]

export const THEMEContext = React.createContext({
  theme: "dark",
  setTHEME: () => {},
})

export const THEMEContextProvider = ({ children }) => {
  const [theme, setTHEME] = useState("dark")
  useEffect(() => {
    setTHEME(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : THEME[1]
    )
  }, [])

  const setTheme = () => {
    if (theme === THEME[0]) {
      localStorage.setItem("theme", THEME[1])
      setTHEME(THEME[1])
    } else {
      localStorage.setItem("theme", THEME[0])
      setTHEME(THEME[0])
    }
  }

  return (
    <THEMEContext.Provider value={{ theme, setTHEME: setTheme }}>
      {children}
    </THEMEContext.Provider>
  )
}
export function useStyle() {
  const { theme, setTHEME } = useContext(THEMEContext)
  //   .log(useContext(THEMEContext))
  return [theme, setTHEME, THEMEJSON]
}

// export const useLang = () => {
//     const {langId, setLangId} = useContext(LangContext);
//     const align = langId == 'en' ? 'left' : 'right';
//     return [lang(langId), align, setLangId, langId];
//   };
