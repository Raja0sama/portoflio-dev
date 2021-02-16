import React from "react"
import useWindowSize from "../../utils/windowSize"
import Layout from "../../pages/home/Layout.js"
import WooshopPic from "../../assets/img/Wooshop.png"
import Play from "../../assets/img/play.png"
import { Button, ButtonOutline, PlayButton } from "../../components/Buttons"
import { Link } from "gatsby"
const Project = props => {
  const { width } = useWindowSize()
  const isMobile = width < 765
  const data = props.pageContext.data
  console.log({ data })
  const componentArr = [
    <Section1 data={data} isMobile={isMobile} width={width} />,
    <Section2
      data={data}
      isMobile={isMobile}
      WooshopPic={WooshopPic}
      Play={Play}
    />,
  ]
  isMobile && componentArr.reverse()
  return (
    <Layout>
      <div
        style={{
          padding: isMobile && "25px 0",
          // paddingRight: isMobile && 20,
          width: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {componentArr.map(e => e)}
        </div>
      </div>
    </Layout>
  )
}

export default Project

const Section1 = ({ isMobile, width, data }) => {
  return (
    <div
      style={{
        width: "100%",
        flex: isMobile && 1,
        margin: !isMobile ? "auto" : "20px 0 0 0",
        overflowX: "auto",
      }}
    >
      <h1
        style={{
          fontSize: width < 500 ? 46 : width / 20,
          fontWeight: "bolder",
          letterSpacing: "0px",
        }}
      >
        {data.heading}
      </h1>
      <p
        style={{
          maxWidth: "90%",
          fontSize: isMobile ? 16 : 18,
          letterSpacing: "0px",
          color: "#8F8F8F",
          fontWeight: 300,
        }}
      >
        {data.description}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {data.buttons.map(e => {
          const Btn = e.type == "OutLined" ? ButtonOutline : Button

          return (
            <Btn>
              <Link to={e.url}>{e.name}</Link>
            </Btn>
          )
        })}
        {/* <ButtonOutline>Github</ButtonOutline> */}
      </div>
    </div>
  )
}

const Section2 = ({ isMobile, WooshopPic, Play, data }) => {
  return (
    <div
      style={{
        background: "white",
        height: isMobile ? "35vh" : "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundImage: isMobile
          ? `url(${data.imageMobile})`
          : `url(${data.imageWeb})`,
        backgroundSize: isMobile ? "cover" : "contain",
        backgroundPosition: "center",
      }}
    >
      {/* <img
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        src={data.imageWeb}
      /> */}
      {!isMobile && <PlayButton Play={Play} />}
    </div>
  )
}
