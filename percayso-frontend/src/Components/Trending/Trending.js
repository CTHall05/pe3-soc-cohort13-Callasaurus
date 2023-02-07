import React from 'react'
import './Trending.css'
import NewsCard from '../NewsCard/NewsCard'
import Navbar from '../Navbar/Navbar'

export default function Trending() {
    return [
        <Navbar/>,
        <div className='trending-container'>
            <div className='trending-header'>
                <h1> Find trending news by category, country and language. </h1>
            </div>
        </div>
      ]
}
