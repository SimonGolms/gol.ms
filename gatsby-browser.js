/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "./src/context/ThemeContext";

export const onInitialClientRender = () => {
  require("typeface-source-sans-pro");
};

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};

// exports.onServiceWorkerUpdateReady = () => window.location.reload(true)
