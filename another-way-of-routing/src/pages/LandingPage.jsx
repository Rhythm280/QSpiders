import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalVar } from '../globalContext/GlobalContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function LandingPage() {
    const { courses, loading } = useContext(GlobalVar);
    const [filteredCourses, setFilteredCourses] = useState([]);

    if (loading) return <h3>Loading...</h3>;

    const filterCourse = (category) => {
        setFilteredCourses(
            courses.filter(course => course.category.includes(category))
        );
    }

    return (
        <>
            <NavBar />
            <main className="landing-container">
                <section className="hero-section">
                    <div className="hero-text">
                        <h1>
                            Largest Software <span>Training Organization</span>
                        </h1>
                        <p>
                            World's premier software training institution, dedicated to bridging the gap between
                            industry demands and academic curricula. With centers worldwide, our platform provides
                            young minds the tools to cultivate successful careers.
                        </p>
                        <Link to="/home" className="cta-btn">Start Exploring</Link>
                    </div>

                    <div className="hero-image">
                        <img src="https://qspiders.com/landingHomeImg.png" alt="Self Development" />
                    </div>
                </section>

                <section className='courses'>
                    <h1>Explore All Courses</h1>
                    <div className="pill-selector">
                        <input type="radio" name="courseType" id="onlinecourse" value="online" />
                        <label htmlFor="onlinecourse">On-Line Course</label>
                        <input type="radio" name="courseType" id="offlinecourse" value="offline" />
                        <label htmlFor="offlinecourse">Off-Line Course</label>
                    </div>

                    <article className="course">
                        <div className="courseList">
                            {/* your buttons remain same */}
                            <button onClick={() => { filterCourse("Popular Course") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Popular%20Courses/2024-08-20T09%3A36%3A24.569794012_icon_sidemenu_popularcourses.svg" alt="Popular Courses" /> Popular Course <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            <button onClick={() => { filterCourse("Software Development") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Software+Development/2024-06-05T11%3A30%3A30.821485400_SoftwareDevelopment.svg" alt="Software Development" /> Software Development <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            <button onClick={() => { filterCourse("Software Testing") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Software%20Testing/2024-06-13T12%3A50%3A08.645801400_Softwaretesting.svg" alt="Software Testing" /> Software Testing <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            <button onClick={() => { filterCourse("Data Science & Analytics") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Data%20Science%20/2024-06-14T18%3A08%3A31.583781700_Data%20Science.svg" alt="Data Science &amp; Analytics" /> Data Science & Analytics <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            <button onClick={() => { filterCourse("Data Engineer") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Data%20Engineer/2024-08-19T12%3A01%3A09.020179383_icon_data_engineering%20%281%29.svg" alt="Data Engineer" /> Data Enginer <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            <button onClick={() => { filterCourse("DevOPS") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Devops/2024-06-14T18%3A07%3A09.805790800_Devops.svg" alt="Devops" /> DevOPS <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            <button onClick={() => { filterCourse("Banking") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Banking/2024-07-10T16%3A35%3A00.937533600_Banking.svg" alt="Banking" /> Banking <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            <button onClick={() => { filterCourse("AI / ML") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/AI%20/%20ML/2024-06-14T18%3A08%3A49.418893_AI-ML.svg" alt="AI / ML" /> AI / ML <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            <button onClick={() => { filterCourse("Cloud Computing") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Cloud%20Computing/2024-06-14T18%3A08%3A11.196257100_Cloud%20Computing.svg" alt="Cloud Computing" /> Cloud Computing <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            <button onClick={() => { filterCourse("Agile / Scrum") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Agile%20%26%20Scurm/2024-06-14T18%3A09%3A29.476196300_Agile.svg" alt="Agile &amp; Scrum " /> Agile / Scrum <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            <button onClick={() => { filterCourse("Software Architecture") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Software%20Architecture/2024-06-13T12%3A47%3A39.596244600_softwareArchitecture.svg" alt="Software Architecture" /> Software Architecture <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                            <button onClick={() => { filterCourse("Aptitude & Soft skills") }}> <img src="https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/soft+skills/2024-08-19T11%3A59%3A14.609786475_icon_soft_skills+(2).svg" alt="Aptitude &amp; Soft Skills" /> Aptitude & Soft skills <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black"><path d="M10 17L15 12L10 7" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
                        </div>

                        <div className="courseFrames">
                            {courses.map((ele, i) => (
                                <div key={i} className="courseCard">
                                    <h3>{ele.courseName}</h3>
                                    <p><strong>Instructor:</strong> {ele.instructor}</p>
                                    <p><strong>Duration:</strong> {ele.duration}</p>
                                    <p><strong>Price:</strong> ${ele.price}</p>
                                    <p><strong>Rating:</strong> {ele.rating} ⭐</p>
                                    <div className="btn">
                                        <button>Enroll</button>
                                        <button>Know More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default LandingPage
