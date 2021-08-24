import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import pagePaths from '../../../helpers/pagePaths'

const CharacterTile = ({ pageSlug, name, genderPronouns, speciess }) => (
    <div className="flex py-2">
        <div className="">
            <h3 className="sg-title-3">
                <Link
                    to={pagePaths.character(pageSlug)}
                    className="hover:underline"
                >
                    {name}
                </Link>
            </h3>
            <p className="sg-body-2">
                {genderPronouns && genderPronouns} |{' '}
                {speciess.map((specie, index) => (
                    <span key={`${index}-${specie.speciesName}`}>
                        {specie.speciesName}
                    </span>
                ))}
            </p>
        </div>
    </div>
)

CharacterTile.propTypes = {
    name: PropTypes.string.isRequired,
    genderPronouns: PropTypes.string,
    speciess: PropTypes.arrayOf(
        PropTypes.shape({
            speciesName: PropTypes.string,
        })
    ),
    pageSlug: PropTypes.string.isRequired,
}

export default CharacterTile
