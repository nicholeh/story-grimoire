import { graphql, Link } from 'gatsby'
import React from 'react'
// import AllCharactersList from '../../components/global/AllCharactersList'
import Seo from '../../components/seo'
import Layout from '../../components/structure/Layout'
import PageTitle from '../../components/structure/PageTitle'
import Section from '../../components/structure/Section'
import pagePath from '../../helpers/pagePaths'

const StorySingle = ({ data }) => {
    const story = data.allSanityStory.nodes[0]

    const { universe } = story

    return (
        <Layout currentPath={pagePath.universe(universe.slug.current)}>
            <Seo title={`Story | ${story.name}`} />
            <Section className="bg-gray-100 py-2">
                <p className="sg-metadata">
                    <Link to={pagePath.universe(universe.slug.current)}>
                        {'<'} Back to the {universe.name} universe
                    </Link>
                </p>
                <div className="container mx-auto"></div>
            </Section>
            <PageTitle
                title={story.name}
                updatedAt={story._updatedAt}
                description={story.description}
                storyVersion={story.storyVersion}
            />
            <Section>
                <div className="container mx-auto">
                    {/* <AllCharactersList characters={story.characters} /> */}
                </div>
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query StorySingle($slug__current: String!) {
        allSanityStory(filter: { slug: { current: { eq: $slug__current } } }) {
            nodes {
                name
                description
                _updatedAt
                type
                version
                universe {
                    name
                    slug {
                        current
                    }
                }
                protagonist {
                    name
                    pronouns
                    slug {
                        current
                    }
                    species {
                        name
                    }
                }
                antagonist {
                    name
                    pronouns
                    slug {
                        current
                    }
                    species {
                        name
                    }
                }
                side {
                    name
                    pronouns
                    slug {
                        current
                    }
                    species {
                        name
                    }
                }
            }
        }
    }
`

export default StorySingle
