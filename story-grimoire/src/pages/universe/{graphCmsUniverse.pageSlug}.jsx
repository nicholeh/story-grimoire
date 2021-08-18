import { graphql } from 'gatsby'
import * as React from 'react'
import AllStoriesList from '../../components/global/AllStoriesList'
import Seo from '../../components/seo'
import Layout from '../../components/structure/Layout'
import PageTitle from '../../components/structure/PageTitle'
import Section from '../../components/structure/Section'

const UniverseSingle = ({ data, location }) => {
    const universe = data.allGraphCmsUniverse.nodes[0]

    return (
        <Layout currentPath={location.pathname}>
            <Seo title={`Universe | ${universe.name}`} />
            <PageTitle
                title={universe.name}
                updatedAt={universe.updatedAt}
                description={universe.description}
            />

            <Section>
                <div className="container mx-auto">
                    <AllStoriesList stories={universe.stories} />
                </div>
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query UniverseSingle($pageSlug: String!) {
        allGraphCmsUniverse(filter: { pageSlug: { eq: $pageSlug } }) {
            nodes {
                name
                description
                updatedAt
                stories {
                    pageSlug
                    title
                    typeOfStory
                    wordCountGoal
                    storyVersion
                    workStatus
                }
            }
        }
    }
`

export default UniverseSingle
