import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Lineitem = ({item, handleCheck, handleremove}) => {
  return (
    <li className='item'>
                <input 
                type='checkbox' 
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
                />
                <label onDoubleClick={() => handleCheck(item.id)}
                  style={(item.checked)?{textDecoration:'line-through'} : null}>{item.item}</label>
                <FaTrashAlt
                role='button'
                tabIndex='0'
                onClick={() => handleremove(item.id)}
                aria-label={`Delete ${item.item}`}
                />
              </li>
  )
}

export default Lineitem