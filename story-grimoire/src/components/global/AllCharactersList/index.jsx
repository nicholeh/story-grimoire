import PropTypes from 'prop-types'
import React from 'react'
import CharacterTile from '../../global/CharacterTile'

const AllCharactersList = ({ characters }) => (
    <div>
        <h2 className="sg-title-1 md:sg-display-3 pb-8">All Characters</h2>
        {characters.map(character => (
            <CharacterTile
                key={character.pageSlug}
                name={character.name}
                pageSlug={character.pageSlug}
                genderPronouns={character.genderPronouns}
                speciess={character.speciess}
            />
        ))}
    </div>
)

AllCharactersList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            genderPronouns: PropTypes.string,
            speciess: PropTypes.arrayOf(
                PropTypes.shape({
                    speciesName: PropTypes.string,
                })
            ),
            pageSlug: PropTypes.string.isRequired,
        })
    ),
}

export default AllCharactersList
