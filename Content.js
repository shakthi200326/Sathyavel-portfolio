import React from 'react'
import Itemlist from './Itemlist';

const Content = ({items, handleCheck, handleremove}) => {
  
  return (
    <main>
      {(items.length)? (
      <Itemlist
      items={items}
      handleCheck={handleCheck}
      handleremove={handleremove}
      />
) : (
  <p style={{marginTop:'2rem'}}>Your list is empty</p>
)}
    </main>
  )
}

export default Content