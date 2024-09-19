import React from "react"
import { Flex } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <Flex sx={{ flexDirection: 'column', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto', maxWidth: '70ch' }}>
      <h1>404: Not Found</h1>
      <p>You just tried to access a page that doesn&apos;t exist... that&apos;s unfortunate :(</p>
    </Flex>
  </Layout>
)

export default NotFoundPage
