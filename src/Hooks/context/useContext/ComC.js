import React, { useContext } from 'react'
import { FirstName, LastName } from './UseContextHook'

const ComC = () => {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return (
        <div>
            <h1>my name is {lname} {fname}</h1>
        </div>
    )
}

export default ComC
