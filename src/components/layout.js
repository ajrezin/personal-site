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
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}>
      <main
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <SkipNavLink sx={{ variant: 'skipLink' }}>
          Skip to navigation bar
        </SkipNavLink>
        {children}
      </main>
      <footer
        sx={{
          padding: '15px 15px 5px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          // flexDirection: ['column', 'row'],
        }}>
        <SkipNavContent />
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
