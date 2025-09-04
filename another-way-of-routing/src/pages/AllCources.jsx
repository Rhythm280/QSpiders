import React, { useContext, useState } from 'react'
import { GlobalVar } from '../globalContext/GlobalContext';

function AllCources() {
    const { courses, loading, addToCart } = useContext(GlobalVar);
    if (loading) return <h3>Loading...</h3>;

    return (
        <div className='allcourses'>
            {courses.map((ele, i) => (
                <div className="card">
                    <h1>{ele.courseName}</h1>
                    <p>{ele.courseDesc}</p>
                    <p> <b>Price:</b> {ele.courseFees} Rs.</p>
                    <p> <b>Trainer name:</b> {ele.instructorName}</p>
                    <p> <b>Mode:</b> {ele.modeOfCourse}</p>
                    <p> <b>duration:</b> {ele.duration}</p>
                    <div className="btn">
                        <button>View Course</button>
                        <button onClick={() => addToCart(ele._id)}>Enroll</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllCources
