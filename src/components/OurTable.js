import React from "react"
import characters from "../data/characters.json"
import planets from "../data/planets.json"

const OurTable = () => {
    return (
    <table>
        <th>
            Name
        </th>
        <th>
            Planet
        </th>
        <OurTableRows />
    </table>
    )
}

const OurTableRows = () => {
    const planetsDict = planets.results.reduce((dict, planet) => {
        dict[planet.url] = planet
        return dict
    }, {})
    return characters.results.map(character => {
        return (<tr>
            <td>{character.name}</td>
            <td>
                {planetsDict[character.homeworld]?.name}
            </td>
        </tr>)
    })
}

export default OurTable