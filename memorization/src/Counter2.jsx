import React, { useMemo, useRef, useState } from 'react'

const Counter2 = () => {
    const [num, setNum] = useState(1);
    const factRef = useRef();

    const factorial = (num) => {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        console.log(fact);
        return fact;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNum(factRef.current.value);
    };

    const fact = useMemo(() => factorial(num), [num]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="num">Number: </label>
                <input type="text" name="" id="" ref={factRef} />
                <button>submit</button>
            </form>
            <p>factorial: {fact}</p>
        </div>
    )
}

export default Counter2
