const path = require(`path`)
var fs = require("fs")
const { default: fetch } = require("node-fetch")
/** @type { import("gatsby").GatsbyNode["createPages"] } */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const a = await fetch("https://portfolio-api.dksami.vercel.app/get-projects")
  const data = await a.json()
  data.map((e, i) => {
    createPage({
      path: `/projects/project-${i + 1}/`,
      component: path.resolve(`./src/dynamicPages/project/index.js`),
      context: {
        data: e,
      },
    })
  })

  createPage({
    path: `/projects`,
    component: path.resolve(`./src/dynamicPages/work/index.js`),
    context: {
      data: data,
    },
  })
}
