import "./App.css";
import useCounter from "./hooks/useCounter";
import useStack from "./hooks/useStack";
function App() {
    const [count, increment] = useCounter(10, 20);
    const [popItem,addToStack,stack]=useStack();
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <br />
            <div>
              <button onClick={()=>addToStack('apple')}>Apple</button>
              <button onClick={()=>addToStack('banana')}>banana</button>
              <button onClick={()=>addToStack('cherry')}>cherry</button>
              <button onClick={()=>addToStack('grape')}>grape</button>
              <button onClick={()=>popItem()}>pop</button>
              <h2>{stack.join(" ")}</h2>
            </div>
        </>
    );
}

export default App;
