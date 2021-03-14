import React from "react" 

const Search = ({ searchQuery, setSearchQuery }) => {
    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
        />
        </form>
    )
}

export default Search