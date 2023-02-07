import React from 'react'
import './Search.css'
import NewsCard from '../NewsCard/NewsCard'
import Navbar from '../Navbar/Navbar'

export default function Search() {
    return [
        <Navbar />,
        <div className='search-container'>
            <div className='search-header'>
                <h1> Search for news in a number of countries and languages. </h1>
            </div>
        </div>
    ]
}
