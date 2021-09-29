import React, { Fragment } from 'react'
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
        {console.log(values)}
        <span className="font-semibold">{label}:</span>{' '}
        {values.map((value, index) => (
            <Fragment key={value._id}>
                {`${value.name}${index + 1 !== values.length ? ', ' : ''}`}
            </Fragment>
        ))}
    </p>
)

const CharacterCard = ({
    profilePhoto,
    name,
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
                        alt={name}
                        className="rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none lg:rounded-t-xl lg:rounded-bl-none"
                    />
                )}
                <div className="p-5 sg-body-1 sm:col-span-2 lg:col-span-1">
                    {age && singleValue('Age', age)}
                    {birthdate && singleValue('Birthdate', birthdate)}
                    {pronouns && singleValue('Pronouns', pronouns)}
                    {species && multiValue('Species', species)}
                    {organizations &&
                        multiValue('Organizations', organizations)}
                    {occupation && singleValue('Occupation', occupation)}
                </div>
            </Grid>
        </div>
    )
}

CharacterCard.propTypes = {
    name: PropTypes.string,
    profilePhoto: PropTypes.shape({}),
    age: PropTypes.number,
    birthdate: PropTypes.string,
    pronouns: PropTypes.string,
    occupation: PropTypes.string,
    species: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
        })
    ),
    organizations: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            name: PropTypes.string,
        })
    ),
    className: PropTypes.string,
}

export default CharacterCard
