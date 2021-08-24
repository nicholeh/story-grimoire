import React from 'react'

const Section = ({ children, className, ...props }) => (
    <section className={`px-8 ${className ? className : ''}`} {...props}>
        {children}
    </section>
)

export default Section
