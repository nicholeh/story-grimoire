import { graphql } from 'gatsby'
import React from 'react'
import AllCharactersList from '../../components/global/AllCharactersList'
import AllStoriesList from '../../components/global/AllStoriesList'
import Seo from '../../components/seo'
import Layout from '../../components/structure/Layout'
import PageTitle from '../../components/structure/PageTitle'
import Section from '../../components/structure/Section'
import SinglePageWithInnerNav from '../../components/view/SinglePageWithInnerNav'
import { universePage } from '../../helpers/pageStructure'

const UniverseSingle = ({ data, location }) => {
    const universe = data.allGraphCmsUniverse.nodes[0]

    return (
        <Layout currentPath={location.pathname}>
            <Seo title={`Universe | ${universe.name}`} />

            <SinglePageWithInnerNav navLinks={universePage}>
                <PageTitle
                    title={universe.name}
                    updatedAt={universe.updatedAt}
                    description={universe.description}
                />

                <Section className="py-24">
                    <div>
                        <AllStoriesList
                            stories={universe.stories}
                            name={universePage.stories.id}
                        />
                        <AllCharactersList
                            characters={universe.characters}
                            name={universePage.characters.id}
                        />
                    </div>
                </Section>
            </SinglePageWithInnerNav>
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
                    pronouns
                    pageSlug
                    speciess {
                        name
                    }
                }
            }
        }
    }
`

export default UniverseSingle
