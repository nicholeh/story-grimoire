import React from 'react'

const Section = ({ children, className, ...props }) => (
    <div className={`px-8 ${className ? className : ''}`} {...props}>
        {children}
    </div>
)

export default Section
