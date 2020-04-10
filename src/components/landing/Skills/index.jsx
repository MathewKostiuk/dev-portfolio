import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="Digital bar chart" />
      </Thumbnail>
      <Details>
        <h1>Shopify Store Creation</h1>
        <p>
          Are you looking to start selling online? I specialize in designing and developing Shopify stores.
        </p>
        <Button as={AnchorLink} href="#contact">
          Let's chat
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
