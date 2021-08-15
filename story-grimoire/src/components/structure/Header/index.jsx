import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import UniverseNav from './UniverseNav'

const Header = ({ siteTitle, className, currentPath }) => (
    <header
        className={`flex justify-between items-center bg-white py-4 px-4 sm:px-8 shadow-sm ${
            className ? className : ''
        }`}
    >
        <Link to="/" className="sg-title-1">
            grimoire
        </Link>

        <UniverseNav currentPath={currentPath} />
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
