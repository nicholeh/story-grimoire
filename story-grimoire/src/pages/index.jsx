import { graphql } from 'gatsby'
import * as React from 'react'

import Seo from '../components/seo'
import Grid from '../components/structure/Grid'
import Layout from '../components/structure/Layout'
import ProjectTile from '../components/structure/ProjectTile'

const IndexPage = ({ data }) => {
    const { nodes } = data.allGraphCmsStory
    return (
        <Layout>
            <Seo title="Home" />
            <div className="h-full">
                <Grid className="p-8 space-y-8 md:space-y-0 md:space-x-12 h-full overflow-auto">
                    <div>
                        <h1 className="sg-display-3 pb-8">Projects</h1>
                        <Grid className="md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {nodes.map((story, index) => (
                                <ProjectTile key={index} content={story} />
                            ))}
                        </Grid>
                    </div>
                </Grid>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query AllStories {
        allGraphCmsStory {
            nodes {
                storyName
                typeOfStory
                storyDescription
                wordCountGoal
            }
        }
    }
`

export default IndexPage
