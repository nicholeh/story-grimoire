import { graphql } from 'gatsby'
import React from 'react'
import CharacterCard from '../../components/global/CharacterCard'
import Seo from '../../components/seo'
import Grid from '../../components/structure/Grid'
import InPageNavigation from '../../components/structure/InPageNavigation'
import Layout from '../../components/structure/Layout'
import Section from '../../components/structure/Section'
import SubPageTitle from '../../components/structure/SubPageTitle'
import pagePath from '../../helpers/pagePaths'

const CharacterSingle = ({ data }) => {
    const character = data.allGraphCmsCharacter.nodes[0]

    const { universe } = character

    return (
        <Layout currentPath={pagePath.universe(universe.pageSlug)}>
            <Seo title={`Character | ${character.name}`} />

            <Grid className="lg:grid-cols-5">
                <InPageNavigation className="col-span-1" />

                {/* Add in side navigation that links to each of the headings */}
                {/* Will need to factor in whether or not the heading is there */}

                <div className="col-span-1 lg:col-span-4">
                    <SubPageTitle
                        title={character.name}
                        updatedAt={character.updatedAt}
                        parentUniverse={universe}
                    />
                    <Section className="md:mt-4">
                        <div className="container mx-auto">
                            <Grid className="lg:grid-cols-5 xl:grid-cols-3 lg:gap-x-32 xl:gap-x-40">
                                <div className="lg:col-span-2 xl:col-span-1 lg:order-2">
                                    <CharacterCard
                                        className="mx-auto"
                                        profilePhoto={character.profileImage}
                                        age={character.age}
                                        birthdate={character.birthdate}
                                        pronouns={character.pronouns}
                                        species={character.speciess}
                                        organizations={character.organizations}
                                        occupation={character.occupation}
                                    />
                                </div>
                                {/* Add html styling to graphcms content */}
                                {/* Add conditional rendering if content is missing */}
                                {/* Sanitize the data somehow? */}
                                <section className="lg:col-span-3 xl:col-span-2 lg:order-1 lg:pt-2 mt-14 lg:mt-0">
                                    <p className="sg-body-0 mb-8">
                                        {character.description}
                                    </p>
                                    <div className="py-10">
                                        <h2 className="sg-title-1 mb-8">
                                            Background History
                                        </h2>
                                        {character.backgroundHistory.map(
                                            (history, index) => (
                                                <div
                                                    key={index}
                                                    dangerouslySetInnerHTML={{
                                                        __html: history.html,
                                                    }}
                                                    className="mt-8"
                                                />
                                            )
                                        )}
                                    </div>
                                    <div className="py-10">
                                        <h2 className="sg-title-1">
                                            Personality
                                        </h2>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: character.personality
                                                    .html,
                                            }}
                                            className="mt-8"
                                        />
                                        <h3 className="sg-title-2 mt-8">
                                            Knowledge
                                        </h3>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: character.knowledge
                                                    .html,
                                            }}
                                            className="mt-4"
                                        />
                                        <h3 className="sg-title-2 mt-8">
                                            Wound
                                        </h3>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: character.wound.html,
                                            }}
                                            className="mt-4"
                                        />
                                    </div>
                                </section>
                            </Grid>
                        </div>
                    </Section>
                </div>
            </Grid>
        </Layout>
    )
}

export const query = graphql`
    query CharacterSingle($pageSlug: String!) {
        allGraphCmsCharacter(filter: { pageSlug: { eq: $pageSlug } }) {
            nodes {
                updatedAt
                name
                pageSlug
                profileImage {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
                description
                pronouns
                age
                speciess {
                    name
                }
                organizations {
                    name
                }
                occupation
                backgroundHistory {
                    html
                }
                personality {
                    html
                }
                knowledge {
                    html
                }
                wound {
                    html
                }
                universe {
                    name
                    pageSlug
                }
            }
        }
    }
`

export default CharacterSingle
