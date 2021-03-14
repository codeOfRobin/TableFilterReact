import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import OurTable from "../components/OurTable"
import Search from "../components/search"
import { useState } from 'react';
import characters from "../data/characters.json"
import SEO from "../components/seo"

const filterCharacters = (characters, query) => {
  if (!query) {
      return characters;
  }

  return characters.filter((character) => {
      const characterName = character.name.toLowerCase();
      return characterName.includes(query);
  });
};

const IndexPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCharacters = filterCharacters(characters.results, searchQuery); 
  return (
    <Layout>
      <SEO title="Home" />
  
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
  
      <OurTable characters = {filteredCharacters}/>
    </Layout>
  )  
}

export default IndexPage
