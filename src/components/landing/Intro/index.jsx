import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/researching.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Howdy!</h1>
				<h4>I'm Mathew.<br/> I'm a Shopify Developer</h4>
				<Button as={AnchorLink} href="#contact">
					Send me a message
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Digital programmer" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
