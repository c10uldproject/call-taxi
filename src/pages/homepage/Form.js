import React from 'react';
import './form.css';
import { indica, nissan } from '../../assets/images/Image';

function Form() {
  return (
   <>
   <div className='container-fluid booking-container'>
    <div className='row justify-content-end'>
        <div className='col-lg-6 model-container'>
          <form>
          <h2>Get Taxi Online</h2>
          <div className='cars-container container-fluid'>
          <div className='row row-cars'>
          <a href='#' className='col-md-2 cars-name'>
          <img src={indica} className="img-thumbnail form-cars" alt="..."/>
           <span className='form-con-span'>Mini</span>
          </a>
          <a href='#' className='col-md-2 cars-name'>
          <img src={nissan} className="img-thumbnail form-cars" alt="..."/>
           <span className='form-con-span'>Sedan</span>
          </a>
          <a href='#' className='col-md-2 cars-name'>
          <img src={nissan} className="img-thumbnail form-cars" alt="..."/>
           <span className='form-con-span'>Sedan</span>
          </a>
          <a href='#' className='col-md-2 cars-name'>
          <img src={nissan} className="img-thumbnail form-cars" alt="..."/>
           <span className='form-con-span'>Sedan</span>
          </a>
          <a href='#' className='col-md-2 cars-name'>
          <img src={nissan} className="img-thumbnail form-cars" alt="..."/>
           <span className='form-con-span'>Sedan</span>
          </a>
          <a href='#' className='col-md-2 cars-name'>
          <img src={nissan} className="img-thumbnail form-cars" alt="..."/>
           <span className='form-con-span'>Sedan</span>
          </a>

          </div>
          </div>
          <div className='container-fluid input-con'>
          <div className='row'>
            <div className='col-6'>
            <select className="form-select form-select-lg mb-3 fs-6" aria-label=".form-select-lg example">
             <option selected>Outstation Package</option>
             <option value="1">One</option>
         </select>
            </div>
            <div className='col-6'>
            <input type="text" className="form-control p-2" placeholder="Name"/>
            </div>
            <div className='col-6 mt-2 mb-2'>
            <select className="form-select form-select-lg mb-1 fs-6" aria-label=".form-select-lg example">
             <option selected>select PickUp Location</option>
             <option value="1">One</option>
         </select>
            </div>
            <div className='col-6 mt-2 mb-2'>
            <input type="text" className="form-control p-2" placeholder="To"/>
            </div>
            <div className='col-6 mt-2 mb-2'>
            <input type="number" className="form-control p-2" placeholder="Number"/>
            </div>
            <div className='col-6 mt-2 mb-2'>
            <input type="datetime-local" className="form-control p-2" placeholder="Date & Time "/>
            </div>
            <div className='col-6 mt-2 check-fare-btn'><button className="button-59" role="button">Check Fare</button></div>
            <div className='col-6 mt-2 check-fare-btn'><button className="button-59" role="button">Get Taxi</button></div>
          </div>
          </div>
          </form>
        </div>
    </div>
   </div>
   </>
  )
}

export default Form;