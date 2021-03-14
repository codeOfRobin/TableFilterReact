import React from "react"
import planets from "../data/planets.json"

const OurTable = ({ characters }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Planet</th>
        </tr>
      </thead>
      <tbody>
        <OurTableRows characters={characters} />
      </tbody>
    </table>
  )
}

const OurTableRows = ({ characters }) => {
  const planetsDict = planets.results.reduce((dict, planet) => {
    dict[planet.url] = planet
    return dict
  }, {})
  return characters.map((character, index) => {
    return (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{planetsDict[character.homeworld]?.name}</td>
      </tr>
    )
  })
}

export default OurTable;
