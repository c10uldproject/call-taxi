import React from 'react';
import './footer.css';
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaArrowRight,FaPhoneAlt} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <>
    <section className='bg-dark'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 mt-5'>
                    <h3 className='footer-tex'>About Us</h3>
                     <p className='footer-tex mt-4'>
                     Maya Call Taxi is one of the leading cab services in Vellore. We give the best rides for low prices.
                      Our service are all that you need if you are looking for a ride.
                     </p>
                     <p className='footer-tex mt-3'>A Unit of Maya Groups</p>
                     <div className='mt-5'>
                        <FaFacebook className='footer-icons'/>
                        <FaInstagram className='footer-icons'/>
                        <FaYoutube className='footer-icons'/>
                        <FaTwitter className='footer-icons'/>
                     </div>
                </div>
                <div className='col-md-4 mt-5 mb-5'>
                <h3 className='footer-tex mb-4'>Explore</h3>
                  <FaArrowRight className='footer-tex arrow-icons'/><a href='#' className='footer-a'>Book a Ride</a>
                  <FaArrowRight className='footer-tex arrow-icons arrow-icon-2'/><a href='#' className='footer-a'>Tariff</a><br/>
                  <FaArrowRight className='footer-tex arrow-icons'/><a href='#' className='footer-a'>Testimonials</a>
                  <FaArrowRight className='footer-tex arrow-icons arrow-icon-2'/><a href='#' className='footer-a'>Packages</a><br/>
                  <FaArrowRight className='footer-tex arrow-icons'/><a href='#' className='footer-a con'>Contact</a>
                  <FaArrowRight className='footer-tex arrow-icons arrow-icon-2'/><a href='#' className='footer-a'>Join Us</a><br/>
                  <FaArrowRight className='footer-tex arrow-icons'/><a href='#' className='footer-a'>Pay Now</a>
                </div>
                <div className='col-md-4 mt-5 mb-5'>
                <h3 className='footer-tex mb-4'>Contact</h3>
                <p className='footer-tex mt-3'>Head Office</p>
                <p className='footer-tex mt-3'>Address: No.3, Natteri Krishnamachari Road, Krishna Nagar, Vellore, Tamil Nadu 632002, India</p>
                <div className='mt-contact-icon'><a href='#' className='footer-tex footer-a'><FaPhoneAlt className='footer-tex arrow-icons'/>0416 2224455</a></div><br/>
               <div className='mt-contact-icon'> <a href='#' className='footer-tex toll footer-a'><FaPhoneAlt className='footer-tex arrow-icons'/> 1800 425 224455 (Toll Free)</a></div><br/>
                <a href='#' className='footer-tex mt-3 footer-a'><IoMdMail className='footer-tex arrow-icons'/>mayacalltaxi@gmail.com</a><br/>
                </div>
            </div>
        </div>
        <div className='container'>
          <div className='row mt-3'>
            <div className='col-sm-5'>
            <a href='#' className='footer-tex footer-a copy-con'>&copy;2023 All Rights Reserved Maya Call Taxi, Vellore </a>
            </div>
            <div className='col-sm-4'>
            <a href='#' className="footer-a footer-tex con">Terms of use</a>
            <a href='#' className="footer-a footer-tex">Privacy Policy</a>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Footer;