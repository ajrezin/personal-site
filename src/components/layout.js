/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import ColorModeToggle from "./colorModeToggle"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
        {children}
      </main>
      <footer
        style={{
          padding: '15px',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        &copy; {new Date().getFullYear()}, built with &hearts; by Ariel Rezin
        <Link to='/' sx={{ variant: 'styles.navLink' }}>Home</Link>
        <Link to='/resources' sx={{ variant: 'styles.navLink' }}>Resources</Link>
        <Link to='/accessibility' sx={{ variant: 'styles.navLink' }}>Accessibility</Link>
        <a href="https://resume.arielrezin.com" sx={{ variant: 'styles.navLink' }}>Resume</a>
        <ColorModeToggle />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
