import React from 'react'

const Grid = ({ children, className, ...props }) => (
    <div
        className={`grid grid-cols-1 ${className ? className : ''}`}
        {...props}
    >
        {children}
    </div>
)

export default Grid
