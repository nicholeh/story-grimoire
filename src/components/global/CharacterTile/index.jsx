import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import pagePaths from '../../../helpers/pagePaths'

const CharacterTile = ({ pageSlug, name, pronouns, species }) => (
    <div className="flex py-2">
        <div className="">
            <h3 className="sg-title-3">
                <Link
                    to={pagePaths.character(pageSlug.current)}
                    className="hover:underline"
                >
                    {name}
                </Link>
            </h3>
            <p className="sg-body-2">
                {pronouns && pronouns} |{' '}
                {species.map((specie, index) => (
                    <span key={specie._id}>
                        {specie.name}
                        {index + 1 !== species.length ? ', ' : ''}
                    </span>
                ))}
            </p>
        </div>
    </div>
)

CharacterTile.propTypes = {
    name: PropTypes.string.isRequired,
    pronouns: PropTypes.string,
    species: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
        })
    ),
    pageSlug: PropTypes.shape({ current: PropTypes.string.isRequired }),
}

export default CharacterTile
