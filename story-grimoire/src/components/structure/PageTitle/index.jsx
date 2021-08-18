import * as React from 'react'
import Section from '../Section'
import PropTypes from 'prop-types'
import helpers from '../../../helpers'

const PageTitle = ({
    title,
    updatedAt,
    description,
    storyVersion,
    ...props
}) => {
    return (
        <Section className="py-12" {...props}>
            <div className="container m-auto">
                <div className="max-w-lg">
                    <h1 className="sg-display-3 md:sg-display-2 lg:sg-display-1 mb-4">
                        {title}
                    </h1>
                    <div className="mt-14">
                        {updatedAt && (
                            <p className="sg-metadata mb-4">
                                {storyVersion && (
                                    <>
                                        <span className="font-semibold">
                                            {storyVersion}
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
                        {description && (
                            <p className="sg-body-1 lg:sg-body-0">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    description: PropTypes.string,
    storyVersion: PropTypes.string,
}

export default PageTitle
