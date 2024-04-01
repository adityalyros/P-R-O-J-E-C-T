import React,{useState} from "react";

function Hello(){
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    };

    const decrement=()=>{
        setCount(count-1);
    }
return(
        <div>
            <h1>Counter App</h1>
            <p>Count:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>


            <button>Dark Mode</button>
            <button>Light Mode</button>
        </div>
    )
}

export default Hello;