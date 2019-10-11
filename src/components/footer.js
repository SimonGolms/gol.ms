import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { FaGithub, FaLinkedin, FaBlog } from "react-icons/fa"

const IconLink = styled.a`
  margin-left: 0.5em;
  color: ${props => props.theme.body};
`

const GatsbyLink = styled(Link)`
  margin-left: 0.5em;
  color: ${props => props.theme.body};
`

const StyledFooter = styled.footer`
  min-height: 3rem;
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
`

const Footer = () => (
  <StyledFooter>
    <IconLink
      href="https://www.linkedin.com/in/simongolms/"
      target="_blank"
      rel="noopener"
    >
      <FaLinkedin />
    </IconLink>
    <IconLink
      href="https://github.com/SimonGolms"
      target="_blank"
      rel="noopener"
    >
      <FaGithub />
    </IconLink>
  </StyledFooter>
)

export default Footer
