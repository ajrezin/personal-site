import React from 'react'
import { Flex } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '../components/button'
import { Styled } from 'theme-ui'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        width: ['90%', '50%', '50%'],
      }}>
      <h2>Hi, I'm Ariel!</h2>
      <p style={{ textAlign: 'center' }}>
        I'm a software developer who wants to make the world a better place.
        I currently <Styled.a href="https://resume.arielrezin.com">work</Styled.a> as a dev at <Styled.a href="https://sentry.com">Sentry Inc.</Styled.a>
        &nbsp;and study Computer Science, Disability Rights & Services, and German at the University of Wisconsin-Madison.
        When I'm not busy hammocking or fostering dogs, I spend my time going down rabbit holes while working on <Styled.a href="https://github.com/arielrezinn">personal projects</Styled.a>.
        If you'd like to get in touch, you can find me on <Styled.a href="https://linkedin.com/in/arielrezin">LinkedIn</Styled.a>.
      </p>
    </Flex>
  </Layout >
)

export default IndexPage
