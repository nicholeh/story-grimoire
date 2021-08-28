import React from 'react'
import PropTypes from 'prop-types'
import NoContent from '../NoContent'

const SubContent = ({ heading, content }) => (
    <>
        <h3 className="sg-title-2 mt-8">{heading}</h3>
        {content && content.html && content.html !== '<p></p>' ? (
            <div
                className="graphCMS-content mt-4"
                dangerouslySetInnerHTML={{
                    __html: content.html,
                }}
            />
        ) : (
            <NoContent />
        )}
    </>
)

SubContent.propTypes = {
    heading: PropTypes.string,
    content: PropTypes.shape({
        html: PropTypes.string,
    }),
}

export default SubContent
