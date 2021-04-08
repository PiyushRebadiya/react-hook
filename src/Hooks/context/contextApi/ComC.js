import React from 'react'
import { FirstName, LastName } from './ContextApi'

const ComC = () => {
    return (
        <div>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return <h1>My name is {lname} {fname}</h1>
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </div>
    )
}

export default ComC
