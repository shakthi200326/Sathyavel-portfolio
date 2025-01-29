import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const Appitem = ({newItem,setnewitem,handlesubmit}) => {
  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handlesubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input autoFocus id='addItem' ref={inputRef} type='text' placeholder='add Item' value={newItem} onChange={(e)=>setnewitem(e.target.value)} required></input>
        <button type='button' aria-label='add Item' onClick={() => inputRef.current.focus()}>

            <FaPlus/>
        </button>
    </form>
  )
}

export default Appitem