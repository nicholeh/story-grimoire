import { graphql, Link } from 'gatsby'
import React from 'react'
import AllCharactersList from '../../components/global/AllCharactersList'
import Seo from '../../components/seo'
import Layout from '../../components/structure/Layout'
import PageTitle from '../../components/structure/PageTitle'
import Section from '../../components/structure/Section'
import pagePath from '../../helpers/pagePaths'

const StorySingle = ({ data }) => {
    const story = data.allGraphCmsStory.nodes[0]

    const { universe } = story

    return (
        <Layout currentPath={pagePath.universe(universe.pageSlug)}>
            <Seo title={`Story | ${story.title}`} />
            <Section className="bg-gray-100 py-2">
                <p className="sg-metadata">
                    <Link to={pagePath.universe(universe.pageSlug)}>
                        {'<'} Back to the {universe.name} universe
                    </Link>
                </p>
                <div className="container mx-auto"></div>
            </Section>
            <PageTitle
                title={story.title}
                updatedAt={story.updatedAt}
                description={story.description}
                storyVersion={story.storyVersion}
            />
            <Section>
                <div className="container mx-auto">
                    <AllCharactersList characters={story.characters} />
                </div>
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query StorySingle($pageSlug: String!) {
        allGraphCmsStory(filter: { pageSlug: { eq: $pageSlug } }) {
            nodes {
                title
                description
                updatedAt
                typeOfStory
                storyVersion
                universe {
                    name
                    pageSlug
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

export default StorySingle
