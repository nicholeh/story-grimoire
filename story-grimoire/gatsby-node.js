/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
            {
                grimoire {
                    universes {
                        universeName
                        universePageSlug
                    }
                }
            }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const UniverseSingle = path.resolve(`src/templates/universe/index.jsx`)
    result.data.grimoire.universes.forEach(universe => {
        const path = universe.universePageSlug
        createPage({
            path,
            component: UniverseSingle,
            context: {
                pagePath: path,
            },
        })
    })
}
