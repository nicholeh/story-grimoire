import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const UniverseBreadcrumb = ({ name, link, className, ...props }) => (
    <p
        className={`sg-metadata text-gray-500 ${className ?? className}`}
        {...props}
    >
        <Link to={link}>
            {'<'} Back to the {name} universe
        </Link>
    </p>
)

UniverseBreadcrumb.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string.isRequired,
}
export default UniverseBreadcrumb
