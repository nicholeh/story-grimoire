import { graphql } from "gatsby"
import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Grid from "../components/structure/Grid"

const IndexPage = ({ data }) => {
  const { stories } = data.grimoire
  return (
    <Layout>
      <Seo title="Home" />
      <Grid className="md:grid-cols-3 lg:grid-cols-2 p-8 space-y-8 md:space-y-0 md:space-x-8 h-full">
        <div className="col-span-1 flex items-center justify-center w-full h-full bg-green-800 text-white py-20">
          <h1>Story Grimoire</h1>
        </div>
        <div className="md:col-span-2 lg:col-span-1 h-full md:max-h-full md:overflow-y-scroll md:pr-6">
          <h2>
            Stories
          </h2>
          <div className="space-y-8">
            {stories.map((story) => (
              <div>
                <h3 className="text-lg font-bold">{story.storyName}</h3>
                <p className="font-mono text-xs">{story.typeOfStory} / {story.wordCountGoal}</p>
                <p className="mt-2 text-sm">{story.projectDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </Grid>
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
