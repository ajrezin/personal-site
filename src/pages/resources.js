import React from 'react'
import { Flex } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourcePage = () => (
  <Layout>
    <SEO title="Resources" />
    <Flex
      role='main'
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        width: ['90%', '50%', '50%'],
      }}>
      <h2>There&apos;s some lovely content on the internet, here&apos;s a collection of some of my favorites!</h2>
      <p role='region' style={{ textAlign: 'center' }}>
        Coming soon :)
      </p>
    </Flex>
  </Layout >
)

export default ResourcePage
