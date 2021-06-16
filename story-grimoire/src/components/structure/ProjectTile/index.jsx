import * as React from 'react'
import PropTypes from 'prop-types'

const ProjectTile = ({ content }) => (
    <div className="flex p-4 bg-white rounded-xl">
        <div className="mt-4">
            <p className="font-mono text-xs">
                {content.typeOfStory} / {content.wordCountGoal}
            </p>
            <h3 className="text-lg font-bold">{content.storyName}</h3>
            {/* <p className="mt-2 text-sm">{content.projectDescription}</p> */}
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
