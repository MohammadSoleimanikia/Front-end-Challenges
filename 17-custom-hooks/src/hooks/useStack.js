import { useState } from "react";

export default function useStack() {
    const [stack, setStack] = useState([]);
    function addToStack(item) {
        setStack((prevStack) => [...prevStack, item]);
    }
    function popItem() {
        setStack((prevStack) => prevStack.slice(0, -1));
    }
    return [popItem, addToStack, stack];
}
