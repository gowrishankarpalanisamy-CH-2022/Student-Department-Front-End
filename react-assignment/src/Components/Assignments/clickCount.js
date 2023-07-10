import { useEffect,useState } from "react";
import React from "react";
import "../App.css";

export default function ClickCount (){
    const[count,setCount] = useState(0);
    const[name,setName] = useState("");

    useEffect(() =>{
        document.title = "Click Count ${count}";
    }, [count]);

    return (
        <div className="clickButton" >
            <label>Enter the name</label>
            <input
              className="inputname"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ></input>
              <button 
               className="Button"
               onClick={() => setCount(count+1)}
               >
                clicked counts = {count}
              </button>
        </div>
    )
}