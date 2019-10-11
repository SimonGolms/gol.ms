/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

// import "./layout.css"

const Content = styled.div`
  padding: 2rem;
  height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Content>
      <main>{children}</main>
    </Content>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
