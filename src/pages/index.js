import React from "react"
import { createGlobalStyle } from "styled-components"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"

import "./../components/layout.css"

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Source Sans Pro, Arial, Sans-serif;
    body {
      background-color: ${typeof window !== `undefined` ? props => props.theme.background : '#141414'};
      background-image: url(${ typeof window !== `undefined` ? props => props.theme.backgroundImage : '../images/background-dark.jpg'});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      margin: 0;
    }
  }
`

const IndexPage = props => (
  <>
    <SEO
      title="Simon Golms | App & Website Developer"
      description="I am Simon, an App & Website Developer, Tekkie, Sportsman and Traveler with love for filter coffee and a good beer and so much more... Find it out."
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
    <GlobalStyle />
    <Layout>
      <Header />
      <LandingBio />
      <Footer />
    </Layout>
  </>
)

export default IndexPage
