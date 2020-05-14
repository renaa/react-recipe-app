import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {

  const APP_ID = 'd4618ef9'
  const APP_KEY = '86a9535551b320bdbf039856bbf68a9a'
  const q = "chicken"
  const numbers = "&from=0&to=5"
  const calories = "&calories=591-722&"
  const health = "health=alcohol-free"

  // update search
  const [search, setSearch] = useState("")
  const updateSearch = ({ target }) => {
    setSearch(target.value)
  }
  //query
  const [query, setQuery] = useState("")
  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }
  // fetchSearchResults
  const [recipies, setRecipies] = useState([])
  const getRecipes = async () => {

    try {
      const exreq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}` + numbers
      const response = await fetch(exreq)
      const data = await response.json()
      console.log(data.hits)
      setRecipies(data.hits)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getRecipes()
  }, [query])


  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-input" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="recipes">
        {recipies.map(({ recipe }, i) => (
          <Recipe key={i}
            title={recipe.label}
            image={recipe.image}
            calories={recipe.calories}
            ingredients={recipe.ingredients}
          ></Recipe>
        ))}
      </div>
    </div>
  )
}

export default App;
