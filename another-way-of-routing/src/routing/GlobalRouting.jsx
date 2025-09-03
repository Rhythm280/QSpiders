import { createBrowserRouter } from 'react-router-dom';
import Layout from './../Layout';
import LandingPage from '../pages/LandingPage'
import HomePage from './../pages/HomePage';
import AllCources from '../pages/AllCources';
import OfflineCourse from '../pages/OfflineCourse';
import OnlineCourse from '../pages/OnlineCourse';
import CorporateTraining from '../pages/CorporateTraining';
import HireFromUs from '../pages/HireFromUs';
import Placement from '../pages/Placement';
import Login from '../pages/LogIn';
import Signup from '../pages/Signup'
import ContactUs from './../pages/ContactUs';
import AddSyllabus from '../pages/AddSyllabus';
import AddTrainer from '../pages/AddTrainer';
import AddCourses from '../pages/AddCourses';
import Cart from '../components/Cart';

const routing = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "/home",
                element: <HomePage />,
                children: [
                    { index: true, element: <AllCources /> },
                    { path: "/home/allcourses", element: <AllCources /> },
                    { path: "/home/offlinecourses", element: <OfflineCourse /> },
                    { path: "/home/onlinecourses", element: <OnlineCourse /> },
                    { path: "/home/corporatetraining", element: <CorporateTraining /> },
                    { path: "/home/hirefromus", element: <HireFromUs /> },
                    { path: "/home/placement", element: <Placement /> },
                    { path: "/home/contact", element: <ContactUs /> },
                    { path: "/home/addcourse", element: <AddCourses /> },
                    { path: "/home/addsyllabus", element: <AddSyllabus /> },
                    { path: "/home/addtrainer", element: <AddTrainer /> }
                ]
            },
            { path: "/cart", element: <Cart /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> }
        ]
    }
])

export default routing;
