import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import gnewslogo from '../../Images/gnewslogo.png'

export default function Navbar() {

    // using the React router to allow for users to go between different pages, which can be done by clicking on the appropriate buttons in the navbar
    const navigate = useNavigate();

    const navigateDashboard = () => {
        navigate('/', { replace: true });
    };

    const navigateSearch = () => {
        navigate('/search', { replace: true });
    };

    const navigateTrending = () => {
        navigate('/trending', { replace: true });
    };

    return (
        <div className='navbar-container'>
        <img onClick={() => {window.open("https://gnews.io/", "_blank").focus();}} className='gnews-icon' src={gnewslogo} alt=''/>
            <div className='navbar-links'>
                <button onClick={navigateDashboard}> Dashboard </button>
                <button onClick={navigateSearch}> Search for news</button>
                <button onClick={navigateTrending}> Trending news</button>
            </div>
        </div>
    )
}
