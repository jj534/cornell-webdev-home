import React from 'react'
import { ReactComponent as Illust0 } from 'src/assets/illust-0.svg'
import { ReactComponent as Illust1 } from 'src/assets/illust-1.svg'
import { ReactComponent as Illust2 } from 'src/assets/illust-2.svg'
import { ReactComponent as Illust3 } from 'src/assets/illust-3.svg'
import { ReactComponent as IllustCore } from 'src/assets/illust-core.svg'
import BrandColor from 'src/components/BrandColor'
import FadeOnView from 'src/components/FadeOnView'
import { FlexRow } from 'src/components/FlexContainer'
import MutedColor from 'src/components/MutedColor'
import Showcase from 'src/components/Showcase'
import Spacer from 'src/components/Spacer'
import Text from 'src/components/Text'
import useIsDesktop from 'src/hooks/useIsDesktop'
import styled from 'styled-components'

const Home = () => {
  const isDesktop = useIsDesktop()

  return (
    <Container>
      <Section>
        <FlexRow justifySpaceAround alignCenter>
          <FadeOnView>
            <Text variant='h3'>
              <MutedColor>Introducing</MutedColor>
            </Text>
            <LogoText variant='h1'>
              <BrandColor>webdev</BrandColor>
            </LogoText>
            <CenteredTextContainer>
              <CenteredText variant='p'>
                webdev is a student organization at Cornell that aims to build performant web
                applications for the Cornell community.
              </CenteredText>
            </CenteredTextContainer>
            <Spacer y={4} />
            {!isDesktop && (
              <FlexRow justifyCenter>
                <Illust0 />
              </FlexRow>
            )}
          </FadeOnView>
          <InnerDivider />
          {isDesktop && (
            <FlexRow justifyCenter>
              <FadeOnView>
                <Illust0 />
              </FadeOnView>
            </FlexRow>
          )}
        </FlexRow>
      </Section>
      <Showcase
        overline='Subteam 01'
        name='Cornlet'
        p1='Cornlet is a sublet marketplace for the Cornell community. Think Airbnb, but for sublets.'
        p2="We're looking to expand into the housing market in general. New features will include year-lease listings, landlord reviews, and more!"
        link='https://www.cornlet.com'
        svg={<Illust1 />}
      />
      <Showcase
        overline='Subteam 02'
        name='Coursable'
        p1="Coursable is a course planning platform for Cornell students. It's still a work in progress!"
        p2="It's going to be an open source course planning platform, which means you will be able
        to duplicate existing course plans instead of creating your own from scratch!"
        link='https://coursable-cornell.herokuapp.com/'
        svg={<Illust2 />}
      />
      <Showcase
        overline='Subteam 03'
        name='Glue'
        p1='Glue is a centralized design system and React component library for webdev.'
        p2='Building a comprehensive design system is hard work! But your work on Glue will impact
        all the projects within webdev. Talk about lots of responsibility!'
        link='https://6156709ecded80003acc50f3-apnyeeyqik.chromatic.com/?path=/docs/button--default'
        svg={<Illust3 />}
      />
      <Showcase
        overline='Subteam 04'
        name='Core'
        p1="Core will be working on this very website. Yep! The one you're looking at right now!"
        p2='This subteam will be responsible for the face of webdev. First impressions matter. Remember, we only have 10 seconds!'
        link='https://github.com/cornell-webdev/cwd-core'
        svg={<IllustCore />}
      />
      {/* <Showcase
        overline="It's open!"
        name='Apply now'
        p1='Applications are open! Head on over and submit your application.'
        p2='We look forward to
        seeing you!'
        link='/apply'
        svg={<IllustApply />}
        isApply
      /> */}
    </Container>
  )
}

const Container = styled.div``

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 98vh;
  padding: 3rem 1rem;

  & svg {
    height: 80%;
    width: 80%;
  }

  @media (min-width: ${(props) => props.theme.large}) {
    & svg {
      height: 40vh;
      width: 40vh;
    }
  }
`

export const InnerDivider = styled.div`
  width: 10vw;
`

const CenteredText = styled(Text)`
  text-align: center;

  @media (min-width: ${(props) => props.theme.large}) {
    text-align: left;
  }
`

const LogoText = styled(Text)`
  white-space: nowrap;
  margin-top: 0.1rem;

  @media (max-width: ${(props) => props.theme.xsmall}) {
    font-size: 2rem;
  }
`

const CenteredTextContainer = styled.div`
  padding: 1.5rem 0;

  @media (min-width: ${(props) => props.theme.large}) {
    max-width: 400px;
  }
`

export default Home
