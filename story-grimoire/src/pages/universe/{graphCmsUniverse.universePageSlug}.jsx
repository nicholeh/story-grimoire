import { graphql } from 'gatsby'
import * as React from 'react'

import Seo from '../../components/seo'
import Layout from '../../components/structure/Layout'

const UniverseSingle = ({ data, location }) => {
    const universe = data.allGraphCmsUniverse.nodes[0]

    const getFormattedDate = dateString => {
        const date = new Date(dateString)
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }

    return (
        <Layout currentPath={location.pathname}>
            <Seo title="TBD" />
            <div className="p-8 max-w-lg">
                <h1 className="sg-display-1 mt-12 mb-4">
                    {universe.universeName}
                </h1>
                <p className="sg-metadata mb-4">{`Last Updated: ${getFormattedDate(
                    universe.updatedAt
                )}`}</p>
                <p className="sg-body-0">{universe.universeDescription}</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query UniverseSingle($universePageSlug: String!) {
        allGraphCmsUniverse(
            filter: { universePageSlug: { eq: $universePageSlug } }
        ) {
            nodes {
                universeName
                universeDescription
                updatedAt
            }
        }
    }
`

export default UniverseSingle
