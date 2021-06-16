import { graphql } from 'gatsby'
import * as React from 'react'
import WCTrackingForm from '../components/global/WCTrackingForm'

import Seo from '../components/seo'
import Grid from '../components/structure/Grid'
import Layout from '../components/structure/Layout'
import ProjectTile from '../components/structure/ProjectTile'

const IndexPage = ({ data }) => {
    const { stories } = data.grimoire
    return (
        <Layout>
            <Seo title="Home" />
            <div className="h-full">
                <Grid className="md:grid-cols-3 lg:grid-cols-2 p-8 space-y-8 md:space-y-0 md:space-x-12 h-full">
                    <div className="">
                        <h1 className="pb-8">Projects</h1>
                        <Grid className="md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {stories.map(story => (
                                <ProjectTile content={story} />
                            ))}
                        </Grid>
                    </div>

                    <div className="md:col-span-2 lg:col-span-1 h-full md:max-h-full md:overflow-y-scroll md:pr-6">
                        <h2 className="pb-8">Goal Tracking</h2>
                        <WCTrackingForm />
                    </div>
                </Grid>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query AllStories {
        grimoire {
            stories {
                storyName
                typeOfStory
                wordCountGoal
                projectDescription
            }
        }
    }
`

export default IndexPage
