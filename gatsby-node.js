exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions

  // Legacy Redirects
  createRedirect({
    fromPath: "/qlckrmote",
    toPath: "http://www.qlckrmote.de",
    isPermanent: true,
    redirectInBrowser: true,
  })
}
