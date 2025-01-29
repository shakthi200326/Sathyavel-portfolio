import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import './App.css';
import Appitem from "./Appitem";
import Searchitem from "./Searchitem";

function App() {

  const [items,setitems] = useState(
        [
          {
            id:1,
            checked: true,
            item: "Practice coding"
          },
          {
            id:2,
            checked: false,
            item: "Playing cricket"
          },
          {
            id:3,
            checked: false,
            item: "Read about ai"
          }
        ]
      );
      const addItem = (item) => {
        const id = item.length? items[items.length-1].id +1 : 1;
        const addnewitem = {id, checked:false, item}
        const listitems = [...items,addnewitem]
        setitems(listitems)
        localStorage.setItem("todo_list",JSON.stringify(listitems))
      }

      const [search, setsearch]  = useState('')


      const [newItem, setnewitem] = useState('')
      const handleCheck = (id) => {
        const listitems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item)
        setitems(listitems)
        localStorage.setItem("todo_list",JSON.stringify(listitems))
        
      }
      const handleremove = (id) => {
        const listitems = items.filter((item) => item.id!==id)
        setitems(listitems)
        localStorage.setItem("todo_list",JSON.stringify(listitems))
        }

      const handlesubmit = (e) => {
        e.preventDefault()
        if(!newItem) return;
        console.log("Submitted")
        addItem(newItem)
        setnewitem('')
      }

  return (
    <div className="Spp">
      <Header title="Sathyavel"/>
      <Appitem
      newItem = {newItem}
      setnewitem = {setnewitem}
      handlesubmit = {handlesubmit}
      />
      <Searchitem
      search={search}
      setsearch={setsearch}
      />  
      <Content 
      items= {items.filter(item => (item.item).includes(search))}
      handleCheck={handleCheck}
      handleremove={handleremove}/>
      <Footer 
      length = {items.length}/>
    </div>
  );
}

export default App;