import React, { useState , useEffect } from 'react'

const UseEffects2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width)
    const widthHandler = () => {
        console.log("helooooooPPP",window.innerWidth);
        setWidthCount(window.innerWidth)
    }
    useEffect(() => {
        console.log("add event");
        window.addEventListener("resize",widthHandler)
        return () => {
            window.removeEventListener("resize",widthHandler)
            console.log("remove event");
       }
    },[])
    return (
        <div>
            <p>The actual size of the window is :</p>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffects2
