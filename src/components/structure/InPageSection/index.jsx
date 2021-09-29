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

        {content &&
            content.map(item => (
                <div key={item._key}>
                    {item.children ? (
                        item.children.map(para => (
                            <p key={para._key} className="pb-4">
                                {para.text}
                            </p>
                        ))
                    ) : (
                        <div className="mt-8" key={item._key}>
                            <h3 className="sg-title-3 pb-4">{item.title}</h3>
                            {item.date && <p>{item.date}</p>}
                            {item.content &&
                                item.content.map(paragraph =>
                                    paragraph.children.map(p => (
                                        <p key={p._key} className="pb-4">
                                            {p.text}
                                        </p>
                                    ))
                                )}
                        </div>
                    )}
                </div>
            ))}

        {/* {content && content.html && content.html !== '<p></p>' && (
            <div
                className="graphCMS-content mt-8"
                dangerouslySetInnerHTML={{
                    __html: content.html,
                }}
            />
        )} */}

        {children && <div className="sub-content">{children}</div>}
    </section>
)

InPageSection.propTypes = {
    heading: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
}

export default InPageSection
