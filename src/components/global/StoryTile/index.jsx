import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import pagePaths from '../../../helpers/pagePaths'

const StoryTile = ({
    pageSlug,
    title,
    typeOfStory,
    wordCountGoal,
    storyVersion,
}) => (
    <div className="flex py-2">
        <div className="">
            <h3 className="sg-title-3">
                <Link
                    to={pagePaths.story(pageSlug)}
                    className="hover:underline"
                >
                    {title}
                </Link>
            </h3>
            <p className="sg-body-2">
                <span className="font-semibold">{storyVersion}</span>
                {' | '}
                {typeOfStory && typeOfStory} | {wordCountGoal && wordCountGoal}
            </p>
        </div>
    </div>
)

StoryTile.propTypes = {
    title: PropTypes.string.isRequired,
    typeOfStory: PropTypes.string,
    wordCountGoal: PropTypes.number,
    pageSlug: PropTypes.string.isRequired,
    storyVersion: PropTypes.string,
    workStatus: PropTypes.string,
}

export default StoryTile
