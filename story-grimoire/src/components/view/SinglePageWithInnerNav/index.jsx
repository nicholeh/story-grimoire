import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../../structure/Grid'
import InPageNavigation from '../../structure/InPageNavigation'

const SinglePageWithInnerNav = ({ navLinks, children }) => (
    <Grid className="lg:grid-cols-5 xxxl:grid-cols-6 lg:gap-10">
        <InPageNavigation className="col-span-1" links={navLinks} />
        <div className="col-span-1 lg:col-span-4">{children}</div>
    </Grid>
)

SinglePageWithInnerNav.propTypes = {
    navLinks: PropTypes.shape({}),
    children: PropTypes.node,
}

export default SinglePageWithInnerNav
