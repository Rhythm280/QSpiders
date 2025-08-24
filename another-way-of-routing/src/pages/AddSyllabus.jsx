import React from 'react'

function AddSyllabus() {
    return (
        <section>
            <form action="">
                <div>
                    <label htmlFor="name">Course name: </label>
                    <input type="text" name="courseName" id="name" />
                </div>
                <div>
                    <label htmlFor="topics">Main Topics: </label>
                    <select name="mainTopics" id="topiics">
                        <option value="">A</option>
                        <option value="">B</option>
                        <option value="">C</option>
                        <option value="">D</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="AdvTopics">Advance Topics: </label>
                    <select name="advanceTopics" id="AdvTopics">
                        <option value="">A</option>
                        <option value="">B</option>
                        <option value="">C</option>
                        <option value="">D</option>
                        <option value="">E</option>
                    </select>
                </div>
                <button>Add Syllabus</button>
            </form>
        </section>
    )
}

export default AddSyllabus
