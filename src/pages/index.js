/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, IconButton } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
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

      <h2 sx={{ fontSize: 2, marginTop: 0, letterSpacing: 2, textAlign: 'center' }}>
        they/them
      </h2>

      {/*  This website is no longer maintained and the url expired :(
           Until I find a replacement site, I'll just hardcode my pronouns.
      <div sx={{ fontWeight: 'bold', marginBottom: 3 }}>
        <Themed.a href="https://pronoun.is/they/">pronoun.is/they/them</Themed.a>
      </div> */}

      <div role='region' style={{ textAlign: 'center' }}>
        <p>
          I&apos;m a queer disabled software developer with a passion for any project that makes the world more accessible and
          inclusive.
        </p>

        <p>
          I&apos;m a software developer at&nbsp;
          <LinkOpensInNewTab link="https://sentry.com" text="Sentry Inc." />
          &nbsp;with a Bachelor&apos;s degree from the University of Wisconsin-Madison. While there,
          I studied Computer Science, Disability Justice, and German.
        </p>

        <p>
          When I&apos;m not going on hikes with&nbsp;
          <LinkOpensInNewTab link="https://www.instagram.com/gilthepoodle/" text="my dog" />
          , learning how to play&nbsp;
          <LinkOpensInNewTab link="https://www.madisongayhockey.org/" text="hockey" />
          , or teaching classes at&nbsp;
          <LinkOpensInNewTab link="https://www.busydogtraining.com/" text="Busy Dog" />
          , you'll find me going down research rabbit holes and working on personal projects.
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
