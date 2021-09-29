import React, { useState } from 'react'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import pagePath from '../../../helpers/pagePaths'

const UniverseNav = ({ currentPath }) => {
    const data = useStaticQuery(graphql`
        query UniverseNavigation {
            allSanityUniverse {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `)

    const { nodes } = data.allSanityUniverse

    const [navValue, setNavValue] = useState(currentPath || '')

    const handleChange = event => {
        setNavValue(event.target.value)
        navigate(event.target.value)
    }

    const menuItems = nodes.sort((a, b) => a.name.localeCompare(b.name))

    return (
        <>
            <div className="">
                <select
                    aria-label="Select a Universe to navigate"
                    value={navValue}
                    onChange={handleChange}
                >
                    <option value="" disabled>
                        Select Universe
                    </option>
                    {menuItems.map(universe => (
                        <option
                            key={universe.slug.current}
                            value={pagePath.universe(universe.slug.current)}
                        >
                            {universe.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default UniverseNav
