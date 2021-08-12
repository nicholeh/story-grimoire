import { graphql } from 'gatsby'
import * as React from 'react'

import Seo from '../../components/seo'
import Layout from '../../components/structure/Layout'

const UniverseSingle = ({ data }) => {
    // const { stories } = data.grimoire
    return (
        <Layout>
            <Seo title="TBD" />
            <div>
                <p>Yup</p>
            </div>
        </Layout>
    )
}

// export const query = graphql`
//     query AllStories {
//         grimoire {
//             stories {
//                 storyName
//                 typeOfStory
//                 wordCountGoal
//                 storyDescription
//             }
//         }
//     }
// `

export default UniverseSingle
