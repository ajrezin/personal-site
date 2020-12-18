import React from 'react'
import { Flex } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styled } from 'theme-ui'
import { MdOpenInNew } from 'react-icons/md'
import OpenLinkInNewTab from '../components/openLinkInNewTab'

const A11yPage = () => (
  <Layout>
    <SEO title="Accessibility" />
    <Flex
      role='main'
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        width: ['90%', '50%', '50%'],
      }}>
      <h1 sx={{ marginBottom: 0 }}>Accessibility</h1>
      <h2>(A11y)</h2>
      <span role='region' style={{ textAlign: 'center' }}>
        <p>
          I make every effort to make this site accessible, and am following WCAG AA standards.
          That said, I'm still learning! If you find anything that isn't accessible, please reach out.
        </p>
      </span>
    </Flex>
  </Layout >
)

export default A11yPage
