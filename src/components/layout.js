/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
/** @jsx jsx */
import { Flex, jsx, useThemeUI } from 'theme-ui'
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { use100vh } from 'react-div-100vh'
import "@reach/skip-nav/styles.css";
import NavbarWeb from "./footerContent/navbarWeb"
import NavbarMobile from "./footerContent/navbarMobile"
import NavLinks from "./footerContent/navLinks"
import Copywrite from "./footerContent/copywrite"

const Layout = ({ children }) => {
  const { theme } = useThemeUI();
  const responsiveHeight = use100vh();
  const mobileNavbarHeight = 62;
  const mobileHeightVal = responsiveHeight ? (responsiveHeight - mobileNavbarHeight + 'px') : '75vh';
  const responsiveHeightVal = responsiveHeight + 'px';
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
    <div>
      <div sx={{ display: 'flex', height: '100vh' }}>
        <NavbarWeb links={<NavLinks />} />
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginBottom: ['73px', '0px', '0px'],
            overflow: 'auto',
          }}>
          <main
            sx={{
              flex: '1 1 auto',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}>
            {children}
          </main>
          {/* This footer is only displayed on large screens */}
          <footer sx={{ padding: '15px 15px 5px', display: ['none', 'none', 'flex'] }}>
            <Copywrite />
          </footer>
        </div>
      </div>
      {/* This footer is only displayed on small screens */}
      <footer
        sx={{
          padding: '15px 25px 15px',
          display: ['flex', 'none', 'none'],
          width: '100%',
          position: 'fixed',
          bottom: '0',
          backgroundColor: 'background'
        }}>
        <NavbarMobile links={<NavLinks />} />
      </footer>
    </div >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
