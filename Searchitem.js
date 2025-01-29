import React from 'react'

const Searchitem = ({search, setsearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>search</label>
        <input 
        id='search'
        type='text'
        placeholder='Search items'
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        />
    </form>
  )
}

export default Searchitem