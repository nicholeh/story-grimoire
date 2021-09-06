import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import pagePaths from '../../../helpers/pagePaths'

const CharacterTile = ({ pageSlug, name, pronouns, speciess }) => (
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
                {pronouns && pronouns} |{' '}
                {speciess.map((species, index) => (
                    <span key={`${index}-${species.name}`}>{species.name}</span>
                ))}
            </p>
        </div>
    </div>
)

CharacterTile.propTypes = {
    name: PropTypes.string.isRequired,
    pronouns: PropTypes.string,
    speciess: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
        })
    ),
    pageSlug: PropTypes.string.isRequired,
}

export default CharacterTile
