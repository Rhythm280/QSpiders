import React from 'react'

function AddCourses() {
    return (
        <section className='addCourse'>
            <form action="">
                <div>
                    <label htmlFor="name">Course name: </label>
                    <input type="text" name="courseName" id="name" />
                </div>
                <div>
                    <label htmlFor="description">Course description: </label>
                    <input type="text" name="courseDescription" id="description" />
                </div>

                <div>
                    <label htmlFor="trainer">Trainer name: </label>
                    <input type="text" name="trainerName" id="trainer" />
                </div>
                <div>
                    <label htmlFor="category">Course category: </label>
                    <input type="text" name="courseCategory" id="category" />
                </div>
                <div>
                    <label htmlFor="mode">Course mode: </label>
                    <select name="" id="">
                        <option value="">mode of course</option>
                        <option value="">Online</option>
                        <option value="">OffLine</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="duration">Course duration</label>
                    <input type="text" name="courseDuration" id="duration" />
                </div>
                <div>
                    <label htmlFor="price">course price: </label>
                    <input type="text" name="coursePrice" id="price" />
                </div>
                <button>Add course</button>
            </form>
        </section>
    )
}

export default AddCourses
