import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Layout from "./../../components/Layout"
export default function Blogs() {
  const [loading, setloading] = useState(false)
  useEffect(() => {}, [])
  return (
    <Layout>
      <div
        className="d-flex flex-column align-items-center disable-scrollbars"
        style={{
          height: "100%",
          marginTop: "70px",
          maringBottom: 10,
          overflow: "auto",
        }}
      >
        <Helmet>
          <title>Raja Osama | Skills</title>
        </Helmet>
        <h1 style={{ fontSize: "calc(4vh + 2vw)" }}>Skills</h1>
        <p>These are some of the stack i have worked with.</p>
        <div className="flex-row" style={{ width: "100%" }}>
          <div className="flex-column">
            <div>
              <div className="container">
                {skill.map((e, i) => (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span
                      style={{
                        fontSize: "24px",
                        opacity: "0.6",
                      }}
                    >
                      {e}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const skill = [
  "Cross-Platform Developer (React-Native, Flutter)",
  "Android Native Developer",
  "PHP Developer",
  "React.Js Developer (Next.js, Gatsby.js, Redux, DVA)",
  "PWA Developer",
  "C# Developer (Winform Apps)",
  ".Net Developer",
  "Node.js Developer (GraphQL, Express.js)",
  "WordPress Developer",
]
