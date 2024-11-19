import { useState } from "react"
import './list.css'

function List(props){

    const[strike,changestrike]=useState("false")
    function strikethrough(){
        if(strike == "false"){
            changestrike('true')
        }else{
            changestrike('false')
        }
    }

    
    return(
        <>
        <div id="item">
            <dt className={strike=='true' ? 'strike' : null} onClick={strikethrough}>{props.item} </dt>
            {strike=='true' ? <button id="btn" onClick={()=>{props.itemdel(props.itemid)}}>Delete</button> : null}
        </div>
            
        </>
    )
}

export {List}