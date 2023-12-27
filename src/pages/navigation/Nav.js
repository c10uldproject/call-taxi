import React, { useState } from 'react';
import { tittle } from '../../assets/images/Image';
import {FaBars} from 'react-icons/fa'
import { FaXmark } from "react-icons/fa6";
import "./nav.css";



function Nav() {

    const[close,setClose]=useState(false);

    const handleClick =()=>{
        setClose(!close)
    }

  return (
    <>
    <nav className='nav-style'>
     <div className="container-fluid">
        <div className=" nav-dis">
            <div className="tittle-con">
                <a href="#">
                    <img src={tittle} alt="tittle" className='nav-logo' />
                </a>
            </div>
            <div className="links-con">
                <ul className={close ? "slider" : "ul-style"}>
                    <li className='li-style li-one'><a href="#" className='a-style'>Package</a></li>
                    <li className='li-style'><a href="#" className='a-style'>Tariff</a></li>
                    <li className='li-style'><a href="#" className='a-style'>Testimonial</a></li>
                    <li className='li-style'><a href="#" className='a-style'>Join Us</a></li>
                    <li className='li-style'><a href="#" className='a-style'>Pay Now</a></li>
                    <li className='li-style'><a href="#" className='a-style'>Contact Us</a></li>
                    <div className="cross-mark" onClick={handleClick}>
                    <FaXmark/>
                    </div>
                </ul>
                <div className="humberger" onClick={handleClick}>
                 <FaBars/>
            </div>
            </div>
        </div>
     </div>
     </nav>
    </>
  )
}

export default Nav;