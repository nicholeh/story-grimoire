import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle, className }) => (
    <header className={`flex md:flex-col justify-between md:justify-start items-center bg-white py-4 px-8 ${className ? className : ''}`}>
        <p className="mr-4 md:mt-16 md:mr-0">
            <Link to="/" className="font-work-sans font-extrabold text-2xl md:text-7xl lg:text-8xl">
                S
            </Link>
        </p>

        <nav className="md:mt-16">
            <Link to="/">Home</Link>
        </nav>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
