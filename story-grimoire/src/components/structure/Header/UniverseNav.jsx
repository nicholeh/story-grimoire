import React, { useState } from 'react'
import { graphql, navigate, useStaticQuery } from 'gatsby'

const UniverseNav = () => {
    const data = useStaticQuery(graphql`
        query UniverseNavigation {
            grimoire {
                universes {
                    universeName
                    universePageSlug
                }
            }
        }
    `)

    const { universes } = data.grimoire

    const [navValue, setNavValue] = useState('')

    const handleChange = event => {
        setNavValue(event.target.value)
        navigate(`/${event.target.value}`)
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
                {universes.map(universe => (
                    <option
                        key={universe.universePageSlug}
                        value={universe.universePageSlug}
                    >
                        {universe.universeName}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default UniverseNav
