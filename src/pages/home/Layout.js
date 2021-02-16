import React, { useState } from "react"
import { Link } from "gatsby"
import useWindowSize from "../../utils/windowSize"
import MenuIcon from "../../assets/img/menuIcon.png"
import cancel from "../../assets/img/cancel.png"
const routes = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Me",
    url: "/about-me",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Blogs",
    url: "https://supersami.medium.com/",
  },
]

const Layout = props => {
  const { height, width } = useWindowSize()
  const isMobile = width < 765
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "rgb(10,8,24)",
        background: `linear-gradient(
            124deg
            , rgb(1 1 2) 0%, rgb(3 0 10) 100%)`,
        fontFamily: "Poppins",
        // justifyContent: "center",
        color: "white",
        flexDirection: isMobile && "column",
      }}
    >
      {isMobile ? (
        <MobileHeader MenuIcon={MenuIcon} />
      ) : (
        <div
          style={{
            width: 100,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px 0",
              fontSize: 25,
              fontWeight: "bolder",
              color: "white",
            }}
          >
            <Link to={"/"}>
              <span>RO</span>
            </Link>
          </div>

          <div
            style={{
              flex: "1",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 1,
                height: "100%",
                backgroundColor: "#312E3E",
              }}
            ></div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px 0",
            }}
          >
            <div
              style={{
                transform: "rotate(180deg)",
                textTransform: "uppercase",
                writingMode: "vertical-lr",
              }}
            >
              {routes.map((e, i) => (
                <span
                  key={i}
                  style={{
                    marginTop: 17,
                  }}
                >
                  <Link to={e.url}>{e.name}</Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className={"hideScroll"}
        style={{
          width: isMobile ? "100vw" : "calc(100vw - 100px)",
          padding: isMobile && "0 10px",
          position: "relative",
          flex: isMobile && 1,
          overflowY: isMobile && "auto",
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

export default Layout

function MobileHeader({ MenuIcon }) {
  const [showM, setshowM] = useState(false)
  return (
    <div
      style={{
        display: "flex",
        padding: "20px 20px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 25,
          fontWeight: "bolder",
          color: "white",
        }}
      >
        <Link to={"/"}>
          <span>RO</span>
        </Link>
      </div>
      <img
        onClick={() => {
          setshowM(!showM)
        }}
        style={{ cursor: "pointer", zIndex: 100, filter: showM && "invert(1)" }}
        width={20}
        height={20}
        src={showM ? cancel : MenuIcon}
      />
      {showM && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "#0e0921",
            zIndex: 99,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            {routes.map(e => (
              <Link to={e.url}>
                <p>{e.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
