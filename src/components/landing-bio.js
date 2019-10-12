import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { SwitchTransition, Transition } from "react-transition-group"
import calculateSize from "calculate-size"

const Container = styled.div`
  text-align: start;
  max-width: 385px;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: calc(100vh - 4rem - 3rem);
`

const Description = styled.span`
  display: inline-block;
  align-self: flex-start;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  height: 1.6rem;
  overflow: hidden;
  white-space: nowrap;
  border-right: 1px solid;
  border-color: ${props => props.theme.body};
`

const NameHeader = styled.h1`
  font-family: Source Sans Pro, Arial, Sans-serif;
  font-size: 3.5rem;
  font-weight: 400;
  letter-spacing: 0.25px;
  margin-bottom: 0;
`
const DescriptionHidden = styled.h2`
  display: none;
  font-size: 1.4rem;
  white-space: nowrap;
`

const getDefaultStyle = props => {
  return {
    transition: `width ease ${props.time ? props.time : 1500}ms`,
    width: "100%",
  }
}

const getTransitionStyles = props => {
  return {
    entering: { width: "0" },
    entered: { width: `${props.width ? props.width + "px" : "100%"}` },
    // entered: { width: `400px` },
    exiting: { width: "0" },
    exited: { width: "0" },
  }
}

const LandingBio = () => {
  // How long should the description be displayed?
  const SHOW_TIME = 5000 // time in ms

  // Constant for the calculation of the transistion speed
  const TRANSITION_SPEED = 1500 / 400 // time in ms / number of pixel

  const TEXT_WIDTH_OFFSET = 10

  // All descriptions which will be displayed in this order
  const DESCRIPTIONS = [
    "App & Website Developer",
    "Tekkie",
    "Fan of filter coffee",
    "Photographer",
    "Traveller",
    "Scooter driver",
    "Sportsman",
    "Beer Lover",
    "... and happy",
  ]

  const [description, setDescription] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setDescription(
        description < DESCRIPTIONS.length - 1 ? description + 1 : 0
      )
    }, SHOW_TIME)
    return () => clearInterval(id)
  }, [description, DESCRIPTIONS])

  const textWidth =
    calculateSize(DESCRIPTIONS[description], {
      font: "Source Sans Pro",
      fontSize: "1.4rem",
    }).width + TEXT_WIDTH_OFFSET

  const transitionTime = TRANSITION_SPEED * textWidth

  const transitionStyles = getTransitionStyles({
    width: textWidth,
  })
  const defaultStyle = getDefaultStyle({ time: transitionTime })

  return (
    <OuterContainer>
      <Container>
        <NameHeader>Hi, I am Simon</NameHeader>
        <SwitchTransition mode={"out-in"}>
          <Transition
            key={description}
            mountOnEnter={true}
            appear={true}
            timeout={{
              appear: 0,
              enter: 100,
              exit: transitionTime,
            }}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
          >
            {state => (
              <Description
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                {`${DESCRIPTIONS[description]}`}
              </Description>
            )}
          </Transition>
        </SwitchTransition>
        {DESCRIPTIONS.map((description, i) => (
          <DescriptionHidden key={`description-${i}`}>
            {description}
          </DescriptionHidden>
        ))}
      </Container>
    </OuterContainer>
  )
}

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
}

export default LandingBio
