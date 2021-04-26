import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Grid from "../components/structure/Grid"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Grid className="lg:grid-cols-2 p-8 space-x-8 h-full">
      <div className="flex items-center justify-center w-full h-full bg-green-800 text-white">
        <h1>Story Grimoire</h1>
      </div>
      <div className="h-full max-h-full overflow-y-scroll">
        <h2>
          Stories
        </h2>
      </div>
    </Grid>
  </Layout>
)

export default IndexPage
