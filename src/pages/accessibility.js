/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkOpensInNewTab from '../components/buildingBlocks/linkOpensInNewTab'

const A11yPage = () => (
  <Layout>
    <SEO title="Accessibility" />
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: ['90%', '50%', '50%'],
        maxWidth: '70ch',
        marginTop: 'auto',
        marginBottom: 'auto'
      }}>
      <h1 sx={{ marginY: '10px' }}>Accessibility (A11y)</h1>
      {/* <h2 sx={{ marginY: '10px' }}>(A11y)</h2> */}
      <span role='region' sx={{ textAlign: 'center' }}>
        <p>
          I make every effort to make this site accessible and adhere to WCAG 2.1 AA standards. The site is tested
          with many methods of interaction including keyboard, mouse, touch, and screen reader. I&apos;ve also used
          the <LinkOpensInNewTab link='https://brailleinstitute.org/freefont' text='Atkinson Hyperlegible font' />
          &nbsp;sitewide to increase legibility for low-vision individuals and have implemented a light/dark mode
          toggle that allows the user to choose their preferred color scheme.
        </p>
        <p>
          That said, I&apos;m still learning! If you find anything that isn&apos;t accessible, please reach out.
        </p>
      </span>
    </Flex>
  </Layout >
)

export default A11yPage
