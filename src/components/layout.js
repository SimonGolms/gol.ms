/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Content = styled.div`
  color: ${props => props.theme.body};
  height: 100vh;
  padding: 2rem;
`;

const Layout = ({ children }) => {
  return (
    <Content>
      <main>{children}</main>
    </Content>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
