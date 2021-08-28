import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'

const InPageNavigation = ({ links, className, ...props }) => (
    <div
        className={`hidden lg:block max-w-xs h-full relative bg-white border-r border-gray-300 px-6 ${
            className ? className : ''
        }`}
        {...props}
    >
        <div className="sticky top-0 pt-48">
            <nav>
                <ul className="text-gray-400">
                    {Object.values(links).map(link => (
                        <li key={link.id} className="mb-5">
                            <Link
                                activeClass="text-gray-900"
                                to={link.id}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="sg-body-1 font-medium cursor-pointer hover:text-gray-700 hover:underline"
                            >
                                {link.heading}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </div>
)

InPageNavigation.propTypes = {
    links: PropTypes.shape({}),
    className: PropTypes.string,
}

export default InPageNavigation
