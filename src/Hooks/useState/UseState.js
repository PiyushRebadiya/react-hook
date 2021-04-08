import React, { useState } from 'react'

const UseState = () => {
    
    const [myName, setMyName] = useState("Piyush")

    const clickHandler = () => {
        if (myName === "Piyush") {
            setMyName("Rebadiya");
        } else {
            setMyName("Piyush")
        }
    }

    return (
        <div>
            <h1>{myName}</h1>
            <button onClick={() => clickHandler()}>Click Me Plz</button>
        </div>
    )
}

export default UseState
