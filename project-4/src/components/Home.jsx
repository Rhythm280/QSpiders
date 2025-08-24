import React from 'react'
import { useRef } from 'react'

function Home() {
    const homeRef = useRef()
    // console.log(homeRef.current) we cant not do this becasue we are trying to access the refe elemen bt before assigning its values
    const changecolor = () => {
        homeRef.current.className = "homePage";
    }
    console.log(homeRef.current)
    return (
        <>
            <section className='home' ref={homeRef}> this is section</section>
            <button className='btn' onClick={changecolor}>change color</button>
        </>

    )
}

export default Home
