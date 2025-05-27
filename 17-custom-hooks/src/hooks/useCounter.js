import { useState } from "react";
export default function useCounter(start,finish){
    const [count,setCount]=useState(start);
    function increment(){
        setCount(prevCount=>(prevCount ===finish ? start : prevCount+1))
    }
    return [count,increment];
}