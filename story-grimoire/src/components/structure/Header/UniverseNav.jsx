import React, { useState } from 'react'
import { graphql, navigate, useStaticQuery } from 'gatsby'

const UniverseNav = ({ currentPath }) => {
    const data = useStaticQuery(graphql`
        query UniverseNavigation {
            allGraphCmsUniverse {
                nodes {
                    universeName
                    universePageSlug
                }
            }
        }
    `)

    const { nodes } = data.allGraphCmsUniverse

    const [navValue, setNavValue] = useState(currentPath || '')

    const createPath = slug => `/universe/${slug}`

    const handleChange = event => {
        setNavValue(event.target.value)
        navigate(event.target.value)
    }

    return (
        <div>
            <select
                aria-label="Select a Universe to navigate"
                value={navValue}
                onChange={handleChange}
            >
                <option value="" disabled>
                    Select Universe
                </option>
                {nodes.map(universe => (
                    <option
                        key={universe.universePageSlug}
                        value={createPath(universe.universePageSlug)}
                    >
                        {universe.universeName}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default UniverseNav
