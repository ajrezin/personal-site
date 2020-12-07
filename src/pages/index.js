import React from 'react'
import { Flex } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styled } from 'theme-ui'
import { MdOpenInNew } from 'react-icons/md'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Flex
      role='main'
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        width: ['90%', '50%', '50%'],
      }}>
      <h2>Hi, I'm Ariel!</h2>
      <h6>
        <Styled.a href="https://pronoun.is/she/her">pronoun.is/she</Styled.a>
        &nbsp;or&nbsp;
        <Styled.a href="https://pronoun.is/they/them">pronoun.is/they</Styled.a>
      </h6>
      <p role='region' style={{ textAlign: 'center' }}>
        I'm a software developer who wants to make the world a better place. I currently&nbsp;
        <Styled.a target="_blank" href="https://resume.arielrezin.com">work <MdOpenInNew aria-label="Opens Ariel's resume in a new window" size={12} /></Styled.a>
        &nbsp;as a developer at&nbsp;
        <Styled.a href="https://sentry.com">Sentry Inc.<MdOpenInNew aria-label="Opens Sentry's website in a new window" size={12} /></Styled.a>
        &nbsp;and study Computer Science, Disability Rights & Services, and German at the University of Wisconsin-Madison.
        When I'm not busy hammocking or fostering dogs, I spend my time going down rabbit holes while working on&nbsp;
        <Styled.a href="https://github.com/arielrezinn">personal projects <MdOpenInNew aria-label="Opens Ariel's Github in a new window" size={12} /></Styled.a>.
        If you'd like to get in touch, you can find me on&nbsp;
        <Styled.a href="https://linkedin.com/in/arielrezin">LinkedIn <MdOpenInNew aria-label="Opens Ariel's profile in a new window" size={12} /></Styled.a>.
      </p>
    </Flex>
  </Layout >
)

export default IndexPage
