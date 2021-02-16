import React, { useEffect, useState } from "react"
import useWindowSize from "../../utils/windowSize"
import { Link } from "gatsby"
import Layout from "../../pages/home/Layout.js"
const Work = props => {
  const { height, width } = useWindowSize()
  const isMobile = width < 765
  const data = props.pageContext.data
  return (
    <Layout>
      <div
        style={{
          padding: "100px 0",
          paddingRight: 20,
          width: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          height: "100%",
        }}
      >
        <h1
          style={{
            fontSize: width < 500 ? 46 : "6vw",
            fontWeight: "bolder",
            letterSpacing: "0px",
          }}
        >
          Projects.
        </h1>

        <div className="row">
          {data &&
            data.map((e, i) => (
              <WorkContainer isMobile={isMobile} data={e} index={i} />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default Work

const WorkContainer = ({ data, index, isMobile }) => {
  const [onHoverEffect, setonHoverEffect] = useState(false)
  return (
    <div
      className="col-md-4 col-12"
      style={{
        // minWidth: "30vw",
        height: "250px",
        padding: 5,
      }}
    >
      <div
        style={{
          height: "100%",
          background: "white",
          position: "relative",
          backgroundImage: isMobile
            ? `url(${data.imageWeb})`
            : `url(${data.imageMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseLeave={() => setonHoverEffect(false)}
        onMouseOver={() => setonHoverEffect(true)}
      >
        {onHoverEffect && <Overlay title={data.heading} index={index} />}
      </div>
    </div>
  )
}

const Overlay = ({ title, index }) => {
  const [scale, setscale] = useState(0)
  useEffect(() => {
    setscale(1)
  }, [])
  return (
    <div
      style={{
        opacity: scale,
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.4)",
        transition: "all .4s ease-in-out",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: 18 }}>
        <Link to={"/projects/project-" + (index + 1)}>{title}</Link>
      </h1>
    </div>
  )
}
