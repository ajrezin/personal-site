import React from 'react'
import { Flex } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkOpensInNewTab from '../components/buildingBlocks/linkOpensInNewTab'

const ResourcePage = () => (
  <Layout>
    <SEO title="Resources" />
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: ['90%', '50%', '50%'],
        marginTop: 'auto',
        marginBottom: 'auto'
      }}>
      <h1>Web A11y</h1>
      <LinkOpensInNewTab link="https://a11y.coffee/" text="https://a11y.coffee/" /><br />
      <LinkOpensInNewTab link="https://www.a11yproject.com/checklist/" text="https://www.a11yproject.com/checklist/" /><br />
      <LinkOpensInNewTab link="https://www.w3.org/TR/WCAG/" text="https://www.w3.org/TR/WCAG/" /><br />
      <LinkOpensInNewTab link="https://www.a11yproject.com/content-style-guide/" text="https://www.a11yproject.com/content-style-guide/" /><br />
      <LinkOpensInNewTab link="https://a11y-style-guide.com/style-guide/" text="https://a11y-style-guide.com/style-guide/" /><br />
      <LinkOpensInNewTab link="https://psa.arielrezin.com" text="https://psa.arielrezin.com" /><br />
      <LinkOpensInNewTab link="https://webaim.org/blog/target-lawsuit-settled/" text="https://webaim.org/blog/target-lawsuit-settled/" /><br />
      <LinkOpensInNewTab link="https://www.lflegal.com/2019/01/dominos-ninth-circuit/" text="https://www.lflegal.com/2019/01/dominos-ninth-circuit/" /><br />
    </Flex>
  </Layout >
)

export default ResourcePage
