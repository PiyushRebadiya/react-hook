import React, { createContext } from 'react'
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

const ContextApi = () => {
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

export default ContextApi
export { FirstName , LastName }
