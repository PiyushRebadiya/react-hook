import React, { useState } from 'react'

const UseMemoHook = () => {
    const [count, setData] = useState(1)
    const [item, setItem] = useState(20)

    const newApple = React.useMemo(
        function appleTime() {
            console.warn("Hello")
            return 100 * count;
        }
        , [count])
    return (
        <div className="App">
            <h1>Count {count}</h1>
            <h1>Item {item}</h1>
            {newApple}
            <br />
            <button onClick={() => setData(count + 1)}>Update State</button>
            <br />
            <button onClick={() => setItem(item * 2)}>Update State</button>

        </div>
    );
}

export default UseMemoHook
