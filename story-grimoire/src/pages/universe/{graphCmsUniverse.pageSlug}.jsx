import { graphql } from 'gatsby'
import React from 'react'
import AllCharactersList from '../../components/global/AllCharactersList'
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

            <Section className="py-24">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
                    <AllStoriesList stories={universe.stories} />
                    <AllCharactersList characters={universe.characters} />
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
                characters {
                    name
                    genderPronouns
                    pageSlug
                    speciess {
                        speciesName
                    }
                }
            }
        }
    }
`

export default UniverseSingle
