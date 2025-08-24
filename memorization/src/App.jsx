import { useCallback, useEffect, useMemo, useState } from 'react'
import Counter1 from './Counter1';
import Counter2 from './Counter2';

function App() {
    // for every re rendering the variables and function (except hooks) will also get re rendered which is not good for the memory
    const [count, setCount] = useState(0);

    // it will return the memoization function
    const fetchData = useCallback((count) => {
        // this function is getting rerenderd when ever state object is changed. so, to avoid this we will use useCallback() here.
        console.log(count);
    }, [])

    // const displayCount = useMemo(() => count)

    // it will mor return the value
    // const fetchData2 = () => useEffect(() => {
        // this function is getting rerenderd when ever state object is changed. so, to avoid this we will use useCallback() here.
    //     console.log("data is fetched");
    // }, [])
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>increment</button>
            <Counter1 data={fetchData} />
        </>
        // <Counter2 />
    )
}

export default App
