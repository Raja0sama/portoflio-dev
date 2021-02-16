import React, { useEffect } from "react"
import { useStyle } from "../../utils/theme"
import "../../assets/bootstrap/css/bootstrap.min.css"
import "../../assets/fonts/ionicons.min.css"
import "../../assets/css/styles.css"
import logo from "../../assets/img/logo.png"
import { Link } from "gatsby"
import themeJSON from "../../theme.json"
import { useGlobal } from "../../utils/context"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Body({ children }) {
  const [theme, setTheme, THEMEJSON] = useStyle()
  const [pageData, setPageData] = useGlobal()
  useEffect(() => {
    // document.body.setAttribute(
    //   "style",
    //   `height: 100%;background: ${
    //     themeJSON[theme].background
    //   };background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${THEMEJSON[
    //     theme
    //   ].color.slice(
    //     1
    //   )}' fill-opacity='0.06'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");color: ${
    //     themeJSON[theme].color
    //   };font-family: 'Maven Pro', sans-serif;`
    // )
  }, [theme])

  return (
    <div className="d-flex flex-fill" style={{ height: "100vh" }}>
      <div
        className="d-flex flex-column"
        style={{ height: "100%", width: "60px", background: "#040f42" }}
      >
        <div
          className="justify-content-center align-items-center"
          style={{ width: "100%", height: "100px" }}
        >
          <img
            alt={"logo"}
            className="img-fluid"
            src={logo}
            style={{ padding: "15px" }}
          />
        </div>
        <div
          className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex flex-column justify-content-center align-items-center justify-content-xl-center"
          style={{ width: "100%", height: "100%" }}
        >
          <AniLink
            paintDrip
            hex={theme == "dark" ? "#fff" : "#000"}
            className="d-flex justify-content-center align-items-center menuicon"
            style={{ width: "100%", height: "60px" }}
            to="/"
          >
            <i
              className="icon ion-ios-home-outline"
              style={{ fontSize: "30px", color: "white" }}
            />
          </AniLink>
          <AniLink
            paintDrip
            hex={theme == "dark" ? "#fff" : "#000"}
            className="d-flex justify-content-center align-items-center menuicon"
            style={{ width: "100%", height: "60px" }}
            to="/about"
          >
            <i
              className="icon ion-ios-person-outline"
              style={{ fontSize: "30px", color: "white" }}
            />
          </AniLink>
          <AniLink
            paintDrip
            hex={theme == "dark" ? "#fff" : "#000"}
            className="d-flex justify-content-center align-items-center menuicon"
            style={{ width: "100%", height: "60px" }}
            to="/skills"
          >
            <i
              className="icon ion-ios-lightbulb-outline"
              style={{ fontSize: "30px", color: "white" }}
            />
          </AniLink>
          <AniLink
            paintDrip
            hex={theme == "dark" ? "#fff" : "#000"}
            className="d-flex justify-content-center align-items-center menuicon"
            style={{ width: "100%", height: "60px" }}
            to="/blogs"
          >
            <i
              className="icon ion-ios-monitor-outline"
              style={{ fontSize: "30px", color: "white" }}
            />
          </AniLink>
        </div>
        <div
          className="justify-content-center align-items-center"
          style={{ width: "100%", height: "100px" }}
        >
          <img
            alt={"logo"}
            className="img-fluid"
            src={logo}
            style={{ padding: "15px" }}
          />
        </div>
      </div>
      <div
        className="d-flex flex-column justify-content-center"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          padding: "3vw 6vw",
          overflow: "hidden",
        }}
      >
        <div
          className="d-flex align-items-center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100px",
            paddingLeft: "5vw",
            paddingRight: "5vw",
          }}
        >
          {/* <h5 style={{ width: "94px" }}>{pageData.title}</h5> */}
          <div
            className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-end justify-content-sm-end justify-content-md-end justify-content-lg-end justify-content-xl-end"
            style={{ width: "100%" }}
          >
            <button
              className="btn"
              type="button"
              style={{
                color: "rgb(228,228,228)",
                background: "rgb(17,17,17)",
                fontSize: "14px",
                marginRight: "10px",
              }}
            >
              <a href={"/Resume.pdf"}>Resume</a>
            </button>

            <button
              className="btn"
              type="button"
              style={{
                color: "rgb(228,228,228)",
                background: "rgb(17,17,17)",
                fontSize: "14px",
                marginRight: "10px",
              }}
              onClick={() => setTheme("light")}
            >
              Theme
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
