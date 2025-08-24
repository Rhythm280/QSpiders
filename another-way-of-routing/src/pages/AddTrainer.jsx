import React from 'react'

function AddTrainer() {
    return (
        <section>
            <form>
                <h2>Add Trainer</h2>

                <div>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        required
                    />
                </div>

                <div>
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                    />
                </div>

                <div>
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                    />
                </div>

                <div>
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                    />
                </div>

                <div>
                    <label>Gender</label>
                    <select name="gender">
                        <option value="">--Select--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label>Address</label>
                    <textarea
                        name="address"
                        rows="2"
                    ></textarea>
                </div>

                <div>
                    <label>Specialization / Expertise</label>
                    <input
                        type="text"
                        name="specialization"
                    />
                </div>

                <div>
                    <label>Experience (Years)</label>
                    <input
                        type="number"
                        name="experience"
                        min="0"
                    />
                </div>

                <div>
                    <label>Qualification / Certification</label>
                    <input
                        type="text"
                        name="qualification"
                    />
                </div>

                <div>
                    <label>Skills</label>
                    <input
                        type="text"
                        name="skills"
                        placeholder="Comma separated"
                    />
                </div>

                <div>
                    <label>Availability</label>
                    <select
                        name="availability"
                    >
                        <option value="">--Select--</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>

                <div>
                    <label>LinkedIn / Portfolio URL</label>
                    <input
                        type="url"
                        name="linkedin"
                    />
                </div>

                <div>
                    <label>Trainer Bio</label>
                    <textarea
                        name="bio"
                        rows="3"
                    ></textarea>
                </div>

                <div>
                    <label>Profile Picture</label>
                    <input
                        type="file"
                        name="profilePic"
                        accept="image/*"
                    />
                </div>

                <div>
                    <label>Status</label>
                    <select name="status">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                <button type="submit">Add Trainer</button>
            </form>
        </section>
    )
}

export default AddTrainer
