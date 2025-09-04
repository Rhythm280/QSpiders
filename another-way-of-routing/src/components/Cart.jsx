import React, { useContext } from 'react'
import { GlobalVar } from '../globalContext/GlobalContext';

function Cart() {
    const { cart, setCart } = useContext(GlobalVar);
    console.log(cart)
    return (
        <div className='cartSection'>
            {cart.map((ele, i) => {
                return (
                    <div className='card'>
                        <h3>{ele.courseId.courseName}</h3>
                        <p>{ele.courseId.courseDesc}</p>
                        <p><b>Duration: </b>{ele.courseId.duration}</p>
                        <p><b>Trainer: </b>{ele.courseId.instructorName}</p>
                        <p><b>mode: </b>{ele.courseId.modeOfCourse}</p>
                        <p><b>Price: </b>{ele.courseId.courseFees}</p>
                        <p><b>Quantity: </b>{ele.quantity}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart
