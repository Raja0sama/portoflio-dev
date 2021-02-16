import React from "react"
import useWindowSize from "../../utils/windowSize"
import BoxBg from "../../assets/svg/box.svg"
import Box from "../../assets/svg/boxbg.svg"
import { Link } from "gatsby"
import { Button, ButtonOutline } from "../../components/Buttons"
import { Helmet } from "react-helmet"
import Layout from "./Layout"
const Home = () => {
  const { height, width } = useWindowSize()
  const isMobile = width < 765
  return (
    <Layout>
      <Helmet>
        <title>Raja Osama | Home Page</title>
      </Helmet>
      <HoveringRightBottom BoxBg={BoxBg} width={width} Box={Box} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <h1
          style={{
            fontSize: width < 500 ? 46 : width / 15,
            fontWeight: "bolder",
            letterSpacing: "0px",
          }}
        >
          Raja Osama
        </h1>
        <h1
          style={{
            fontSize: 26,
            // fontWeight: "bolder",
            letterSpacing: "0px",
          }}
        >
          라자 오사마 - راجہ اسامہ
        </h1>
        <p
          style={{
            maxWidth: isMobile ? undefined : width / 2,
            fontSize: width < 600 ? 17 : 22,
            letterSpacing: "0px",
            color: "#8F8F8F",
            fontWeight: 300,
          }}
        >
          A Rockstar Product Designer & Tech Agnostic Software Developer, based
          in Karachi city of lights.
        </p>
        <div
          style={{ display: isMobile ? "block" : "flex", textAlign: "center" }}
        >
          <Button>
            <div style={{ margin: "0 30px" }}>
              <Link to={"/projects"}>Work</Link>
            </div>
          </Button>
          <ButtonOutline>
            <div style={{ margin: "0 10px" }}>
              {" "}
              <Link to={"https://www.linkedin.com/in/rajaosama/"}>Resume</Link>
            </div>
          </ButtonOutline>
        </div>
      </div>
    </Layout>
  )
}

export default Home

function HoveringRightBottom({ BoxBg, width = 0, Box }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        {/* <img src={Box} style={{ width: width / 2 }} /> */}
        <img
          src={BoxBg}
          style={{
            width: width / 2,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: width / 12,
          right: width / 15,
        }}
      >
        <img
          src={Box}
          style={{
            width: width / 5,
            animation: "move 6s ease infinite",
          }}
        />
        {/* <img src={BoxBg} style={{ width: width / 2 }} /> */}
      </div>
    </>
  )
}
