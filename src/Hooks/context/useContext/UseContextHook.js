import React, { createContext } from 'react'
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

const UseContextHook = () => {
    return (
        <div>
            <FirstName.Provider value={"Piyush"}>
                <LastName.Provider value={"Rebadiya"}>
                    <ComA />
                </LastName.Provider>
            </FirstName.Provider>
        </div>
    );
};

export default UseContextHook
export { FirstName , LastName }
