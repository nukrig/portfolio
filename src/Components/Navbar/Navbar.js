import React, { useState } from "react"
import './NavbarStyles.css'
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from 'react-icons/fa'

function Navbar(){
    const [color,setColor]=useState(false)
    const[click,setClick]=useState(false)

    const changeColor = ()=>{
        if(window.scrollY >= 30){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const handleClick = ()=>{
        setClick(!click)
    }


    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'>
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/projects'> Projects </Link>
                </li>
                <li>
                    <Link to='/about'> About </Link>
                </li>
            </ul>
            <div className="burger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:'white'}} />) 
                : (<FaBars size={20} style={{color:'white'}} />)}
                
                
            </div>
        </div>
    )
}

export default Navbar