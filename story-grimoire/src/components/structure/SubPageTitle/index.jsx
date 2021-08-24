import React from 'react'
import Section from '../Section'
import PropTypes from 'prop-types'
import helpers from '../../../helpers'
import UniverseBreadcrumb from '../UniverseBreadcrumb'
import pagePaths from '../../../helpers/pagePaths'

const SubPageTitle = ({
    title,
    updatedAt,
    metadata,
    parentUniverse,
    ...props
}) => {
    return (
        <Section className="py-14" {...props}>
            <div className="container m-auto">
                <UniverseBreadcrumb
                    name={parentUniverse.name}
                    link={pagePaths.universe(parentUniverse.pageSlug)}
                    className="mb-14"
                />

                <h1 className="sg-display-3 md:sg-display-2 lg:sg-display-1 mb-2">
                    {title}
                </h1>
                {updatedAt && (
                    <p className="sg-metadata">
                        {metadata && (
                            <>
                                <span className="font-semibold">
                                    {metadata}
                                </span>
                                {' | '}
                            </>
                        )}

                        <span>
                            {`Last Updated: ${helpers.getFormattedDate(
                                updatedAt
                            )}`}
                        </span>
                    </p>
                )}
            </div>
        </Section>
    )
}

SubPageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    metadata: PropTypes.string,
    parentUniverse: PropTypes.shape({
        name: PropTypes.string.isRequired,
        pageSlug: PropTypes.string.isRequired,
    }),
}

export default SubPageTitle
