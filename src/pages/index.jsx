import { graphql } from 'gatsby'
import React from 'react'
import AllStoriesList from '../components/global/AllStoriesList'
import Seo from '../components/seo'
import Grid from '../components/structure/Grid'
import Layout from '../components/structure/Layout'
import Section from '../components/structure/Section'

const IndexPage = ({ data }) => {
    const { nodes } = data.allSanityStory
    return (
        <Layout>
            <Seo title="Home" />
            <Section>
                <Grid className="p-8 space-y-8 md:space-y-0 md:space-x-12 h-full overflow-auto">
                    <AllStoriesList story={nodes} />
                </Grid>
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query AllStories {
        allSanityStory {
            nodes {
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
`

export default IndexPage
