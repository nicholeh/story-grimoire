import { graphql } from 'gatsby'
import React from 'react'
import CharacterCard from '../../components/global/CharacterCard'
import Seo from '../../components/seo'
import Grid from '../../components/structure/Grid'
import InPageSection from '../../components/structure/InPageSection'
import SubContent from '../../components/structure/InPageSection/SubContent'
import Layout from '../../components/structure/Layout'
import Section from '../../components/structure/Section'
import SubPageTitle from '../../components/structure/SubPageTitle'
import SinglePageWithInnerNav from '../../components/view/SinglePageWithInnerNav'
import pagePath from '../../helpers/pagePaths'
import { characterPage } from '../../helpers/pageStructure'

const CharacterSingle = ({ data }) => {
    const character = data.allSanityCharacter.nodes[0]

    const { universe } = character

    return (
        <Layout currentPath={pagePath.universe(universe.slug.current)}>
            <Seo title={`Character | ${character.name}`} />

            <SinglePageWithInnerNav navLinks={characterPage}>
                <SubPageTitle
                    title={character.name}
                    updatedAt={character._updatedAt}
                    parentUniverse={universe}
                />
                <Section className="md:mt-4">
                    <div className="container mx-auto">
                        <Grid className="lg:grid-cols-5 xl:grid-cols-3 lg:gap-x-32 xl:gap-x-40">
                            <div className="lg:col-span-2 xl:col-span-1 lg:order-2">
                                <CharacterCard
                                    name={character.name}
                                    className="mx-auto"
                                    profilePhoto={
                                        character.profileImage &&
                                        character.profileImage.asset &&
                                        character.profileImage.asset
                                    }
                                    age={character.age}
                                    birthdate={character.birthdate}
                                    pronouns={character.pronouns}
                                    species={character.species}
                                    organizations={character.organization}
                                    occupation={character.occupation}
                                />
                            </div>

                            <section className="lg:col-span-3 xl:col-span-2 lg:order-1 lg:pt-2 mt-14 lg:mt-0">
                                <p className="sg-body-0 mb-8">
                                    {character.description}
                                </p>

                                {/* Physical Characteristics */}
                                <InPageSection
                                    id={characterPage.physical.id}
                                    heading={characterPage.physical.heading}
                                />

                                {/* Background History */}
                                <InPageSection
                                    id={characterPage.background.id}
                                    heading={characterPage.background.heading}
                                    content={character.background}
                                />

                                {/* Personality */}
                                <InPageSection
                                    id={characterPage.personality.id}
                                    heading={characterPage.personality.heading}
                                    content={
                                        character.personality &&
                                        character.personality.description
                                    }
                                >
                                    <SubContent
                                        heading="Knowledge"
                                        content={
                                            character.personality &&
                                            character.personality.knowledge
                                        }
                                    />
                                    <SubContent
                                        heading="Wound"
                                        content={
                                            character.personality &&
                                            character.personality.wound
                                        }
                                    />
                                </InPageSection>

                                {/* Relationships */}
                                <InPageSection
                                    id={characterPage.relationships.id}
                                    heading={
                                        characterPage.relationships.heading
                                    }
                                />

                                {/* Story Arcs */}
                                <InPageSection
                                    id={characterPage.storyArcs.id}
                                    heading={characterPage.storyArcs.heading}
                                />
                            </section>
                        </Grid>
                    </div>
                </Section>
            </SinglePageWithInnerNav>
        </Layout>
    )
}

export const query = graphql`
    query CharacterSingle($slug__current: String!) {
        allSanityCharacter(
            filter: { slug: { current: { eq: $slug__current } } }
        ) {
            nodes {
                _updatedAt
                name
                slug {
                    current
                }
                profileImage {
                    asset {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
                description
                pronouns
                age
                species {
                    _id
                    name
                }
                organization {
                    _id
                    name
                }
                occupation
                background {
                    _key
                    title
                    date
                    content {
                        children {
                            _key
                            text
                        }
                    }
                }
                personality {
                    description {
                        _key
                        children {
                            _key
                            text
                        }
                    }
                    knowledge {
                        _key
                        children {
                            _key
                            text
                        }
                    }
                    wound {
                        _key
                        children {
                            _key
                            text
                        }
                    }
                }
                universe {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    }
`

export default CharacterSingle
