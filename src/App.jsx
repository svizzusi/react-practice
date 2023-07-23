import React from 'react'

const About = React.lazy(() => import("./components/About/About"))
const Contact = React.lazy(() => import("./components/Contact/Contact"))
const ErrorPage = React.lazy(() => import("./components/ErrorPage/ErrorPage"))
const Departments = React.lazy(() => import("./components/Departments/Departments"))
const Profile = React.lazy(() => import("./components/Profile/Profile"))
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";

import Home from "./components/Home/Home";
// import ErrorPage from "./components/ErrorPage/ErrorPage";
// import Departments from "./components/Departments/Departments";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import FrontEnd from "./components/FrontEnd/FrontEnd";
import BackEnd from "./components/BackEnd/BackEnd";
import DevOps from "./components/DevOps/DevOps";
import Loading from './components/Loading/Loading';
import ProfileDashboard from './components/Profile/ProfileDashboard'


const LoadAtTheTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return null;
}

const App = () => {
    const userName = 'Stephen'
    const userId = 'xyz1'

    const [openLogin, setOpenLogin] = useState(false)

        function openLoginModal() {
            setOpenLogin(prevOpenLogin => !prevOpenLogin);
        }
        function closeLoginModal() {
            setOpenLogin(prevOpenLogin => !prevOpenLogin);
        }

    return (
        <>
            <NavBar openLoginModal={openLoginModal}/>
            <LoadAtTheTop />
            <Routes>
                <Route 
                    path='/' 
                    element={<Home
                    openLogin={openLogin}
                    closeLoginModal={closeLoginModal} 
                    />}
                ></Route>
                <Route path='about' element={
                    <React.Suspense fallback={<Loading />}>
                        <About />
                    </React.Suspense>
                }></Route>
                <Route path='contact' element={
                    <React.Suspense fallback={<Loading />}>
                        <Contact />
                    </React.Suspense>
                }></Route>
                <Route path='departments' element={
                    <React.Suspense fallback={<Loading />}>
                        <Departments />
                    </React.Suspense>
                }>
                    <Route index element={<FrontEnd />}></Route>
                    <Route path='frontend' element={<FrontEnd />}></Route>
                    <Route path='backend' element={<BackEnd />}></Route>
                    <Route path='devops' element={<DevOps />}></Route>
                </Route>
                <Route path='profile' element={
                    <React.Suspense fallback={<Loading />}>
                        <Profile userName={userName}/>
                    </React.Suspense>
                }>
                    <Route path={`:${userId}`} element={<ProfileDashboard userName={userName} />}></Route>
                </Route>
                <Route path='loading' element={<Loading />}></Route>
                <Route path='*' element={
                    <React.Suspense fallback={<Loading />}>
                        <ErrorPage />
                    </React.Suspense>
                }></Route>
            </Routes>
            <Footer />
        </>
    )
};

export default App;
