import React from 'react'
import { Box, Flex } from "theme-ui"

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
      <h1>Hi, I'm Ariel!</h1>
      <p style={{ fontWeight: 'bold' }}>
        <Styled.a href="https://pronoun.is/she/her">pronoun.is/she</Styled.a>
        &nbsp;or&nbsp;
        <Styled.a href="https://pronoun.is/they/them">pronoun.is/they</Styled.a>
      </p>
      <span role='region' style={{ textAlign: 'center' }}>
        <p>
          I'm a software developer with a passion for any project that makes the world more accessible and
          inclusive. I currently work as a developer on the portals team at&nbsp;
          <Styled.a target="_blank" href="https://sentry.com">Sentry Inc.<MdOpenInNew aria-label="Opens in a new window" size={12} /></Styled.a>
          &nbsp;and study Computer Science, Disability Rights & Services, and German at the University of Wisconsin-Madison.
        </p>
        <p>
          When I'm not busy hammocking or&nbsp;
        <Styled.a href="https://fetchwi.org/doggos/morgan">fostering dogs<MdOpenInNew aria-label="Opens Ariel's foster dog in a new window" size={12} /></Styled.a>
        , I spend my time going down rabbit holes while working on personal projects.
        </p>
        <Styled.a target="_blank" href="https://resume.arielrezin.com">Resume<MdOpenInNew aria-label="Opens Ariel's resume in a new window" size={12} /></Styled.a>
        <Styled.a href="https://github.com/arielrezinn">Github<MdOpenInNew aria-label="Opens in a new window" size={12} /></Styled.a>
        <Styled.a href="https://linkedin.com/in/arielrezin">LinkedIn <MdOpenInNew aria-label="Opens Ariel's profile in a new window" size={12} /></Styled.a>.
      </span>
    </Flex>
  </Layout >
)

export default IndexPage
