import React, { useState, useEffect } from "react"
import { Navbar } from "./components/Navbar"
import { Search } from "./components/Search"
import { SearchResult } from "./components/SearchResult"

const API_KEY = process.env.REACT_APP_API_KEY
const API_SECRET = process.env.REACT_APP_API_SECRET
const API_URL = `https://api.discogs.com/database/search?key=${API_KEY}&secret=${API_SECRET}`

const App: React.FC = () => {
  const [result, setResult] = useState([])
  const [query, setQuery] = useState("")
  const [type, setType] = useState("")

  const queryChangeHandler = (newQuery: string) => {
    setQuery((prev) => newQuery)
  }

  const typeChangeHandler = (newType: string) => {
    setType((prev) => newType)
  }

  useEffect(() => {
    searchSubmitHandler()
  }, [type])

  const searchSubmitHandler = () => {
    const queryUrl = `${API_URL}&q=${query}&type=${type}`
    fetch(queryUrl, {
      headers: {
        "User-Agent": "ReactDiscogsClient/0.1 +http://localhost:3000",
      },
    })
      .then((response) => response.json())
      .then((data) => setResult(data.results))
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          <div className="col-md-3 col-xl-2 bd-sidebar">
            <Search
              onSubmit={searchSubmitHandler}
              onQueryChange={queryChangeHandler}
              onTypeChange={typeChangeHandler}
              params={{ query, type }}
            />
          </div>
          <div className="col-md-9 col-xl-10">
            <SearchResult items={result} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
