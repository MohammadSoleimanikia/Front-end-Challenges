import { useEffect, useState } from "react";

export default function Timer() {
    const [timer, setTimer] = useState(0);
    useEffect(()=>{
        let interval=setInterval(()=>{
            setTimer((prevState)=> prevState+1)
        },1000)
        return () => clearInterval(interval);
    },[])
    function reset() {
        setTimer(0);
    }
    return (
        <>
            <h1>{timer}</h1>
            <button onClick={reset}>Reset</button>
        </>
    );
}
