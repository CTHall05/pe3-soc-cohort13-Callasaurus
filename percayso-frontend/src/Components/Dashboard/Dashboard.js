import React from 'react'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from "react-router-dom";
import newsimageone from '../../Images/newsimageone.jpg'
import newsimagetwo from '../../Images/newsimagetwo.jpg'
import newsimagethree from '../../Images/newsimagethree.jpg'
import newsimagefour from '../../Images/newsimagefour.jpg'

export default function Dashboard() {
  return [
    <Navbar/>,
    <div className='dashboard-container'>
        <div className='dashboard-header'>
            <h1> Instant news from across the globe. Powered by GNews. </h1>
        </div>
        <div className='dashboard-image-container'>
            <img className='dashboard-images' src={newsimageone} alt=''/>
            <img className='dashboard-images' src={newsimagetwo} alt=''/>
            <img className='dashboard-images' src={newsimagethree} alt=''/>
            <img className='dashboard-images' src={newsimagefour} alt=''/>
        </div>
        <div className='card container'>
             <div>
                
             </div>
        </div>
    </div>
  ]
}
