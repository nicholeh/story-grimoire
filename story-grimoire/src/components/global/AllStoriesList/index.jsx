import PropTypes from 'prop-types'
import React from 'react'
import { workStatus } from '../../../helpers/enums'
import StoryTile from '../../structure/StoryTile'

const AllStoriesList = ({ stories }) => (
    <div>
        <h2 className="sg-title-1 md:sg-display-3 pb-8">All Stories</h2>
        {workStatus.map(status => {
            const storiesByStatus = stories.filter(
                story => story.workStatus === status
            )
            if (storiesByStatus.length > 0) {
                return (
                    <div key={status} className="mb-8">
                        <h3 className="sg-body-1 pb-1">{status}</h3>
                        {stories
                            .filter(story => story.workStatus === status)
                            .sort((a, b) => a.title.localeCompare(b.title))
                            .map((story, index) => (
                                <StoryTile
                                    key={index}
                                    title={story.title}
                                    pageSlug={story.pageSlug}
                                    typeOfStory={story.typeOfStory}
                                    wordCountGoal={story.wordCountGoal}
                                    storyVersion={story.storyVersion}
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
    stories: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            typeOfStory: PropTypes.string,
            wordCountGoal: PropTypes.number,
            pageSlug: PropTypes.string.isRequired,
            storyVersion: PropTypes.string,
            workStatus: PropTypes.string.isRequired,
        })
    ),
}

export default AllStoriesList
