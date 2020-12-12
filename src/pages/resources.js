import React from 'react'
import { Flex } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styled } from 'theme-ui'
import { MdOpenInNew } from 'react-icons/md'

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
      <h2>Hi, I'm Ariel!</h2>
      <p role='region' style={{ textAlign: 'center' }}>
        There's some lovely
      </p>
    </Flex>
  </Layout >
)

export default ResourcePage
