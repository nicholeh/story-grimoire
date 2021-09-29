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
    const universe = data.allSanityUniverse.nodes[0]
    const characters = data.allSanityCharacter.nodes

    return (
        <Layout currentPath={location.pathname}>
            <Seo title={`Universe | ${universe.name}`} />

            <SinglePageWithInnerNav navLinks={universePage}>
                <PageTitle
                    title={universe.name}
                    updatedAt={universe._updatedAt}
                    description={universe.description}
                />

                <Section className="py-24">
                    <div>
                        <AllStoriesList
                            story={universe.story}
                            name={universePage.stories.id}
                        />
                        <AllCharactersList
                            characters={characters}
                            name={universePage.characters.id}
                        />
                    </div>
                </Section>
            </SinglePageWithInnerNav>
        </Layout>
    )
}

export const query = graphql`
    query UniverseSingle($slug__current: String!) {
        allSanityUniverse(
            filter: { slug: { current: { eq: $slug__current } } }
        ) {
            nodes {
                name
                description
                _updatedAt
                story {
                    name
                    slug {
                        current
                    }
                    type
                    wcGoal
                    version
                    status
                }
            }
        }
        allSanityCharacter(
            filter: { universe: { slug: { current: { eq: $slug__current } } } }
        ) {
            nodes {
                name
                pronouns
                slug {
                    current
                }
                species {
                    _id
                    name
                }
            }
        }
    }
`

export default UniverseSingle
