import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Grid from '../../structure/Grid'

const singleValue = (label, value) => (
    <p>
        <span className="font-semibold">{label}:</span> {value}
    </p>
)

const multiValue = (label, values) => (
    <p>
        <span className="font-semibold">{label}:</span>{' '}
        {values.map(
            (value, index) =>
                `${value.name}${index + 1 !== values.length ? ', ' : ''}`
        )}
    </p>
)

const CharacterCard = ({
    profilePhoto,
    age,
    birthdate,
    pronouns,
    species,
    organizations,
    occupation,
    className,
    ...props
}) => {
    const profileImg = getImage(profilePhoto)
    return (
        <div
            className={`bg-gray-100 rounded-xl shadow-lg max-w-sm sm:max-w-none ${
                className && className
            }`}
            {...props}
        >
            <Grid className="sm:grid-cols-3 lg:grid-cols-1">
                {profilePhoto && (
                    <GatsbyImage
                        image={profileImg}
                        className="rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none lg:rounded-t-xl lg:rounded-bl-none"
                    />
                )}
                <div className="p-5 sg-body-1 sm:col-span-2 lg:col-span-1">
                    {age && singleValue('Age', age)}
                    {birthdate && singleValue('Birthdate', birthdate)}
                    {pronouns && singleValue('Pronouns', pronouns)}
                    {species && multiValue('Species', species)}
                    {organizations.length > 0 &&
                        multiValue('Organizations', organizations)}
                    {occupation && singleValue('Occupation', occupation)}
                </div>
            </Grid>
        </div>
    )
}

CharacterCard.propTypes = {
    profilePhoto: PropTypes.shape({}),
    age: PropTypes.string,
    birthdate: PropTypes.string,
    pronouns: PropTypes.string,
    occupation: PropTypes.string,
    species: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
        })
    ),
    organizations: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
        })
    ),
    className: PropTypes.string,
}

export default CharacterCard
