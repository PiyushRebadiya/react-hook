import React, { useEffect, useState } from 'react';

const UseEffects1 = () => {
    const [count, setCount] = useState(10)
    
    useEffect(() => {
        count > 0 ? document.title = `Chats (${count})` : document.title = `Chats `
         console.log("hello");
    },[count])
    console.log("hello outside");

   
    return (
        <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click 🙂</button>
        <button onClick={() => count !== 0 && setCount(count - 1)}>Click 🙃</button>
        </div>
    )
}

export default UseEffects1;
