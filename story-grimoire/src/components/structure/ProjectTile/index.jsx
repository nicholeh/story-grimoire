import * as React from 'react'
import PropTypes from 'prop-types'

const ProjectTile = ({ content }) => (
    <div className="flex p-4 bg-white rounded-xl">
        <div className="mt-4">
            <p className="sg-body-2">
                {content.typeOfStory} / {content.wordCountGoal}
            </p>
            <h3 className="sg-title-2">{content.storyName}</h3>
            {/* <p className="mt-2 sg-body-2">{content.projectDescription}</p> */}
        </div>
    </div>
)

ProjectTile.propTypes = {
    content: PropTypes.shape({
        storyName: PropTypes.string,
        typeOfStory: PropTypes.string,
        wordCountGoal: PropTypes.string,
        // projectDescription: PropTypes.string,
    }),
}

export default ProjectTile
