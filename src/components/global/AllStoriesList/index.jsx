import PropTypes from 'prop-types'
import React from 'react'
import { workStatus } from '../../../helpers/enums'
import StoryTile from '../../global/StoryTile'

const AllStoriesList = ({ story, ...props }) => (
    <div {...props}>
        <h2 className="sg-title-1 md:sg-display-3 pb-8">All Stories</h2>
        {workStatus.map(status => {
            const storiesByStatus = story.filter(work => work.status === status)
            if (storiesByStatus.length > 0) {
                return (
                    <div key={status} className="mb-8">
                        <h3 className="sg-body-1 pb-1">{status}</h3>
                        {story
                            .filter(work => work.status === status)
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((work, index) => (
                                <StoryTile
                                    key={index}
                                    title={work.name}
                                    pageSlug={work.slug.current}
                                    typeOfStory={work.type}
                                    wordCountGoal={work.wcGoal}
                                    storyVersion={work.version}
                                />
                            ))}
                    </div>
                )
            }
            return null
        })}
    </div>
)

AllStoriesList.propTypes = {
    story: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            type: PropTypes.string,
            wcGoal: PropTypes.number,
            slug: PropTypes.shape({ current: PropTypes.string.isRequired }),
            version: PropTypes.string,
            status: PropTypes.string.isRequired,
        })
    ),
}

export default AllStoriesList
