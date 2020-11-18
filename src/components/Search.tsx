import React, { useState } from "react"
import { Filter } from "./Filter"
import { SearchParams, SearchProps } from "../types"

export const Search: React.FC<SearchProps> = (props) => {
  const params = props.params

  const changeQueryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onQueryChange(event.target.value)
  }

  const changeTypeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onTypeChange(event.target.value)
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    props.onSubmit()
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control"
              id="inputSearch"
              placeholder="Search..."
              value={params.query}
              onChange={changeQueryHandler}
            />
          </div>
          <div className="form-group col-md-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        <div className="form-group">
          <select
            className="form-control"
            id="searchTypeSelect"
            value={params.type}
            onChange={changeTypeHandler}
          >
            <option value="">All</option>
            <option value="artist">Artist</option>
            <option value="release">Release</option>
            <option value="label">Label</option>
          </select>
        </div>
      </form>
      <Filter />
    </>
  )
}
