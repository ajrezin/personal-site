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
import NavContent from "./navContent"
//import Footer from "./navFooter"

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
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <NavContent />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
