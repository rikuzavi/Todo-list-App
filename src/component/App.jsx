import { useState, useEffect } from "react"
import './App.css'
import { List } from "./List.jsx"

function App(){
    function uidgen(){
        return Math.floor(Math.random()*99999)
    }


    if(!localStorage.getItem('todolist')){
        localStorage.setItem('todolist',JSON.stringify([]))
    }
    
    const [value, change] = useState("")
    function getvalue(event){
        let v = event.target.value
        change(v)
    }

    function setlist(event){
        event.preventDefault()
        if(value!=''){
            let prevval = JSON.parse(localStorage.getItem('todolist'))
            let newval =[...prevval,value]
            renderitems(newval)
            localStorage.setItem('todolist', JSON.stringify(newval))
            change("")
        }
    }

    function deleteitem(indexno){
        let prevval = JSON.parse(localStorage.getItem('todolist'))
        prevval.splice(indexno,1)
        renderitems(prevval)
        localStorage.setItem('todolist', JSON.stringify(prevval))
    }
    
    const[items, renderitems] =useState([])
    useEffect(()=>{
        renderitems(JSON.parse(localStorage.getItem('todolist')))
    },[])
 
    return (
        <>
            <div id="outer">
                <div id="inp">
                    <input value={value} onChange={getvalue} type="text" placeholder="Add items" />
                    <button onClick={setlist}>Add</button>
                </div>
                <div id="list">
                    {
                        items.map((val,key)=>{
                            return <List key={uidgen()} item={val} itemid={key} itemdel={deleteitem}/>
                        }) 
                    }
                </div>
            </div>
        </>
    )
}

export {App}