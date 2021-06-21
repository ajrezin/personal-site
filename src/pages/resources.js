import React from 'react'
import { Flex } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OpenLinkInNewTab from '../components/openLinkInNewTab'

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

      <div role='region'>
        <h2>Web A11y</h2>
        <OpenLinkInNewTab link="https://a11y.coffee/" text="https://a11y.coffee/" /><br />
        <OpenLinkInNewTab link="https://www.a11yproject.com/checklist/" text="https://www.a11yproject.com/checklist/" /><br />
        <OpenLinkInNewTab link="https://www.w3.org/TR/WCAG/" text="https://www.w3.org/TR/WCAG/" /><br />
        <OpenLinkInNewTab link="https://www.a11yproject.com/content-style-guide/" text="https://www.a11yproject.com/content-style-guide/" /><br />
        <OpenLinkInNewTab link="https://a11y-style-guide.com/style-guide/" text="https://a11y-style-guide.com/style-guide/" /><br />
        <OpenLinkInNewTab link="https://webaim.org/blog/target-lawsuit-settled/" text="https://webaim.org/blog/target-lawsuit-settled/" /><br />
        <OpenLinkInNewTab link="https://www.lflegal.com/2019/01/dominos-ninth-circuit/" text="https://www.lflegal.com/2019/01/dominos-ninth-circuit/" /><br />
      </div>
    </Flex>
  </Layout >
)

export default ResourcePage
