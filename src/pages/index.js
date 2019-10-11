import React from "react"
import styled from "@emotion/styled"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { ThemeProvider } from "./../components/ThemeContext"
import Header from "../components/header"

import "./../components/layout.css"

const Container = styled.div`
  color: ${props => props.theme.body};
  background-image: url(${props => props.theme.backgroundImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

const IndexPage = () => (
  <ThemeProvider>
    <Container>
      <Layout>
        <SEO
          title="Simon Golms"
          keywords={[
            `simon`,
            `golms`,
            `simon golms`,
            `developer`,
            `mobile app`,
            `website`,
            `fisch`,
            `boehringer`,
            `boehringer ingelheim`,
            `ionic`,
            `js`,
            `javascript`,
            `npm`,
            `node`,
            `angular`,
            `react`,
            `react`,
            `blog`,
            `azure`,
            `devops`,
            `azure devops`,
            `openshift`,
            `jenkins`,
            `apple`,
            `ios`,
            `mac`,
            `android`,
            `biberach`,
            `ulm`,
            `germany`,
          ]}
        />
        <Header />
        <LandingBio />
        <Footer />
      </Layout>
    </Container>
  </ThemeProvider>
)

export default IndexPage
