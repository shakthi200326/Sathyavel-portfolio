import React from 'react'
import Lineitem from './Lineitem';
const Itemlist = ({items, handleCheck, handleremove}) => {
  return (
    <ul>
        {items.map((item) => (
          <Lineitem
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          handleremove={handleremove}
          />
        ))}
      </ul>
  )
}

export default Itemlist