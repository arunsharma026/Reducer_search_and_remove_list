import { queries } from '@testing-library/react'
import React from 'react'
import {AppContext, UseglobelContext } from './context/AppProvider'

const Search = () => {

  const {Search_post, query} = UseglobelContext(AppContext);
  return (
    <>
     <h1>Search Blog</h1>
    <form onSubmit={(e) => e.preventDefault()}>
      <input
      type="text"
      value={query}
      onChange={(e)=> Search_post(e.target.value)}
      />
    </form>
    </>
  )
}

export default Search