import React from "react"
import { Flex, jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Flex sx={{ flexDirection: 'column' }}>
      <h1>404: Not Found</h1>
      <p>You just tried to access a page that doesn&#39;t exist... how sad :(</p>
    </Flex>
  </Layout>
)

export default NotFoundPage
