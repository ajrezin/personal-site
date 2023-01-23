/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, IconButton } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Themed } from 'theme-ui'
import LinkOpensInNewTab from '../components/buildingBlocks/linkOpensInNewTab'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        width: ['90%', '80%', '50%'],
        maxWidth: '70ch',
        marginTop: 'auto',
        marginBottom: 'auto'
      }}>
      <h1 sx={{ fontSize: 7, marginBottom: 0, letterSpacing: 2, textAlign: 'center' }}>
        Hi, I&apos;m Ariel
      </h1>

      <div sx={{ fontWeight: 'bold', marginBottom: 3 }}>
        <Themed.a href="https://pronoun.is/they/">pronoun.is/they/them</Themed.a>
      </div>

      <div role='region' style={{ textAlign: 'center' }}>
        <p>
          I&apos;m a queer disabled software developer with a passion for any project that makes the world more accessible and
          inclusive.
        </p>

        <p>
          I&apos;m a developer at&nbsp;
          <LinkOpensInNewTab link="https://sentry.com" text="Sentry Inc." />
          &nbsp;and study Computer Science, Disability Rights & Services, and German at the University of
          Wisconsin-Madison.
        </p>

        <p>
          When I&apos;m not busy&nbsp;
          <LinkOpensInNewTab link="https://youbrewkombucha.com/kombucha-quick-start-guide" text="making kombucha" />,
          working with&nbsp;
          <LinkOpensInNewTab link="https://arielrezinn.github.io/pedigree/" text="my dog" />
          , or trying to keep&nbsp;
          <LinkOpensInNewTab link="https://greg.app/ariel/" text="my plants" />
          &nbsp;alive, I spend my time going down research rabbit holes and working on personal projects.
        </p>
      </div>
      <Flex sx={{ marginY: 4, justifyContent: 'center', gap: ['40px', '30px', '15px'] }}>
        <IconButton
          sx={{ cursor: 'pointer', '&:hover': { color: 'primary' } }}
          variant="link"
          aria-label="github opens in new tab"
          onClick={() => { window.open('https://github.com/arielrezinn') }}>
          <FiGithub size="24" />
        </IconButton>

        <IconButton
          sx={{ cursor: 'pointer', '&:hover': { color: 'primary' } }}
          variant="link"
          aria-label="linkedin opens in new tab"
          onClick={() => { window.open('https://linkedin.com/in/arielrezin') }}>
          <FiLinkedin size="24" />
        </IconButton>
      </Flex>
    </Flex>
  </Layout >
)

export default IndexPage
