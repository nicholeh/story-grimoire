import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { NumberInput, TextInput } from '../../structure/FormFields/index'

const WCTrackingForm = () => {
    const data = useStaticQuery(graphql`
        query WCTrackingFormQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <form className="grid grid-cols-1 space-y-4">
            <NumberInput label="Word Count" />
            <TextInput label="Word Count" />
            {console.log(data)}
        </form>
    )
}

export default WCTrackingForm
