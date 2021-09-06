import React from 'react'
import PropTypes from 'prop-types'
import NoContent from '../../global/NoContent'

const InPageSection = ({
    id,
    heading,
    className,
    content,
    children,
    ...props
}) => (
    <section
        className={`py-10 ${className ? className : ''}`}
        name={id}
        {...props}
    >
        <h2 className="sg-title-1">{heading}</h2>

        {!content && <NoContent />}

        {content && content.length >= 1 && (
            <>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="graphCMS-content mt-8"
                        dangerouslySetInnerHTML={{
                            __html: item.html,
                        }}
                    />
                ))}
            </>
        )}

        {content && content.html && content.html !== '<p></p>' && (
            <div
                className="graphCMS-content mt-8"
                dangerouslySetInnerHTML={{
                    __html: content.html,
                }}
            />
        )}

        {children && <div className="sub-content">{children}</div>}
    </section>
)

InPageSection.propTypes = {
    haeding: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
}

export default InPageSection
