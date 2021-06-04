/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, IconButton } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styled } from 'theme-ui'
import OpenLinkInNewTab from '../components/openLinkInNewTab'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

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
      <h1 sx={{ fontSize: 7, marginBottom: 0, letterSpacing: 2 }}>
        Hi, I&apos;m Ariel
      </h1>

      <div sx={{ fontWeight: 'bold', marginBottom: 3 }}>
        <Styled.a href="https://pronoun.is/they/them">pronoun.is/they</Styled.a>
        &nbsp;or&nbsp;
        <Styled.a href="https://pronoun.is/she/her">pronoun.is/she</Styled.a>
      </div>

      <div role='region' style={{ textAlign: 'center' }}>
        <p>
          I&apos;m a queer disabled software developer with a passion for any project that makes the world more accessible and
          inclusive.
        </p>

        <p>
          I&apos;m a developer at&nbsp;
          <OpenLinkInNewTab link="https://sentry.com" text="Sentry Inc." />
          &nbsp;and study Computer Science, Disability Rights & Services, and German at the University of
          Wisconsin-Madison.
        </p>

        <p>
          When I&apos;m not busy&nbsp;
          <OpenLinkInNewTab link="https://youbrewkombucha.com/kombucha-quick-start-guide" text="making kombucha" />,
          working with&nbsp;
          <OpenLinkInNewTab link="https://www.instagram.com/gilthepoodle/" text="my dog" />
          , or trying to keep&nbsp;
          <OpenLinkInNewTab link="https://greg.app/ariel/" text="my plants" />
          &nbsp;alive, I spend my time going down research rabbit holes and working on personal projects.
        </p>
      </div>
      <div sx={{ marginTop: 4 }}>
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
      </div>
    </Flex>
  </Layout >
)

export default IndexPage
