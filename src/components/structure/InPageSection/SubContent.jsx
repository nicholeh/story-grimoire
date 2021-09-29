import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import NoContent from '../../global/NoContent'

const SubContent = ({ heading, content }) => (
    <>
        <h3 className="sg-title-2 mt-8">{heading}</h3>
        {content && content.length > 0 ? (
            <div className="mt-4">
                {content.map(para => (
                    <p key={para._key} className="pb-4">
                        {para.children.map(i => (
                            <Fragment key={i._key}>{i.text}</Fragment>
                        ))}
                    </p>
                ))}
            </div>
        ) : (
            <NoContent />
        )}
    </>
)

SubContent.propTypes = {
    heading: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.shape({})),
}

export default SubContent
