/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import NavbarWeb from "./footerContent/navbarWeb"
import NavbarMobile from "./footerContent/navbarMobile"
import NavLinks from "./footerContent/navLinks"
import Copywrite from "./footerContent/copywrite"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div
      sx={{
        height: '100vh',
      }}>
      <main
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'scroll',
          height: ['calc(100vh - 82px)', 'calc(100vh - 72px)', 'calc(100vh - 78.5px)'],
        }}>
        <SkipNavLink sx={{ variant: 'skipLink', position: 'absolute', top: '0' }}>
          Skip to navigation bar
        </SkipNavLink>
        {children}
      </main>
      <footer
        sx={{
          padding: ['25px 25px 25px', '20px 15px 20px', '15px 15px 5px'],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
          width: '100%',
          position: 'fixed',
          bottom: '0',
        }}>
        <SkipNavContent sx={{ position: 'absolute', top: '0' }} />
        <NavbarWeb links={<NavLinks />} />
        <NavbarMobile links={<NavLinks />} />
        <Copywrite />
      </footer>
    </div >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
