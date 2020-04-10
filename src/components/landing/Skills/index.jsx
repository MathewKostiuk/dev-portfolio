import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import ecomm from 'assets/illustrations/shopping.svg'
import webSearch from 'assets/illustrations/web_search.svg'
import { Wrapper, SecondWrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <>
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={ecomm} alt="Digital bar chart" />
      </Thumbnail>
      <Details>
        <h1>Shopify Store Creation</h1>
        <p>
          New to e-commerce? I can help you get setup for the future with a professional online store that's easy to work with.
        </p>
        <Button as={AnchorLink} href="#contact">
          Let's chat
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
    <SecondWrapper>
    <SkillsWrapper as={Container}>
      <Details>
        <h1>Customizations</h1>
        <p>
          Stand out amongst the crowd with a store that matches your unique brand.
      </p>
        <Button as={AnchorLink} href="#contact">
          Customize It!
      </Button>
      </Details>
      <Thumbnail>
        <img src={webSearch} alt="Digital bar chart" />
      </Thumbnail>
    </SkillsWrapper>
  </SecondWrapper>
  </>
)
