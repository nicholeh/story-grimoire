import React from 'react'
import PropTypes from 'prop-types'

const InPageNavigation = ({ pageLinks, className, ...props }) => (
    <div
        className={`max-w-xs h-full relative bg-white border-r border-gray-500 px-6 ${
            className ? className : ''
        }`}
        {...props}
    >
        <div className="sticky top-0 pt-48">
            <nav>This is a test.</nav>
        </div>
    </div>
)

InPageNavigation.propTypes = {
    className: PropTypes.string,
}

export default InPageNavigation
