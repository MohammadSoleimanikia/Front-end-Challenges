## custom hooks 
1. declare like a function 
2. use react hooks 
3. return a state or method 
4. use state or method in app with calling hook 

```js
import { useState } from "react";
export default function useCounter(start,finish){
    const [count,setCount]=useState(start);
    function increment(){
        setCount(prevCount=>(prevCount ===finish ? start : prevCount+1))
    }
    return [count,increment];
}
```
