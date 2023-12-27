import React from 'react';
import Banner from './Banner';
import './home.css';
import { FaPhoneVolume,FaNotesMedical,FaWhatsapp,FaFacebook,FaCheck} from "react-icons/fa6";
import { MdPhonelinkRing } from "react-icons/md";
import { MdOutlineJoinFull } from "react-icons/md";
import { boxCar, car1, service1, service2, service3, service4 } from '../../assets/images/Image';
import {MDBCarousel,MDBCarouselItem, MDBCol,MDBIcon,MDBTypography,MDBContainer,MDBRow,} from "mdb-react-ui-kit";



function Home() {
  return (
    <>
    <Banner/>
    <section className='ser-available-con'>
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-4 serv-con-span'><h3 className='p-no mt-5'><FaPhoneVolume className='phone-icon'/>9087477027</h3>
          <h3 className='p-no mt-3 mb-4'><MdPhonelinkRing className='phone-icon'/>9087477027</h3></div>
          <div className='col-md-4'><div className='serv-con-span'><MdOutlineJoinFull /><br/>Join Us</div></div>
          <div className='col-md-4'><div className='serv-con-span'><FaNotesMedical/><br/>Our Trafiffs</div></div>
        </div>
      </div>
    </section>
    <section className='serv-bg-col'>
    <div className='container-fluid'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-12 serv-con'><span className='serv-con'>Service Available AT</span></div>
        </div>
      </div>
      <div className='container padd-serv'>
        <div className='row'>
        <div className='col-sm-2 aria-l mt-4'>Vellore</div>
        <div className='col-sm-2 aria-l mt-4'>Chennai</div>
        <div className='col-sm-2 aria-l mt-4'>Ambur</div>
        <div className='col-sm-3 aria-l mt-4'>Ranipet</div>
        <div className='col-sm-2 aria-l mt-4'>Arcot</div>
        <div className='col-sm-2 aria-l mt-4'>Arani</div>
        <div className='col-sm-3 aria-l mt-4'>Kanchipuram</div>
        <div className='col-sm-3 aria-l mt-4'>Gudiyatham</div>
        <div className='col-sm-3 aria-l mt-4'>Tiruvannamalai</div>
        </div>
      </div>
    </section>
    <section>
    <div className="container-fluid">
                <div className="row multiple-row v-align-row">
                  <div className="col-lg-12 col-md-12 text-center">
                    <div className="col-wrap">
                      <div className="block-heading mb-5">
                        <h3 className="block-top-heading mt-5">WELCOME</h3>
                        <h2 className="block-main-heading">OUR SERVICES</h2>
                        <span className="block-sub-heading">Safe Travel</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mb-2">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                            <img src={service1} />
                        </div>
                        <h4 className="content-title"><a href="#">RAPID CITY TRANSFER</a></h4>
                        <div className="des">
                          <p>
                          We will bring you quickly and comfortably to anywhere in your city
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <img src={service2} />
                        </div>
                        <h4 className="content-title">
                          <a href="#">HOTEL PICKUP <br />
                          </a>
                        </h4>
                        <div className="des">
                          <p>
                          Visiting the city? We are here at your service for pick up and drop at your hotel
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                          <img src={service3} />
                        </div>
                        <h4 className="content-title"><a href="#">AIRPORT PICKUP/DROP</a></h4>
                        <div className="des">
                          <p>Contact us for Airport pick up/drop for you or your guests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <img src={service4} />
                        </div>
                        <h4 className="content-title"><a href="#">BAGGAGE TRANSPORT</a></h4>
                        <div className="des">
                          <p>Have extra luggage? We will arrange the perfect cab?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </section>
     <section className='serv-bg-col'>
      <div className='container-fluid padd-serv'>
        <div className='row'>
        <div className="col-lg-12 col-md-12 text-center">
                    <div className="col-wrap">
                      <div className="block-heading">
                        <h5 className="block-top-heading mt-3">SEE OUR</h5>
                        <h2 className="block-main-heading fs-1">TARIFFS</h2>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='container-fluid'>
              <div className='row'>
               <div className='col-md-4 mb-5'>
               <div className="card card-cascade wider">
               <div className="view view-cascade overlay">
               <img src={boxCar} alt="..." className="img-thumbnail center box-car-img"/>
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                        </a>
                     </div>
                    <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                      <h3 className="card-title text-white">MINI</h3>
                      <p class="blue-text pb-2 text-white">Seating 4+1</p>
                      <p className="card-text text-white">The perfect cab for a quick ride Indica, Etios Liva, Wagon R, Alto, Celerio, Indigo, Bolt </p>
                       <h3 className='text-white'>Rs.11/Km(Non-Ac)</h3>
                       <h3 className='text-white'>Rs.12/Km(Ac)</h3>
                      {/*   <a className="px-2 fa-lg li-ic"><FaPhoneVolume className='box-con-icons'/></a>
                         <a className="px-2 fa-lg tw-ic"><FaWhatsapp className='box-con-icons'/></a>
                        <a className="px-2 fa-lg fb-ic"><FaFacebook className='box-con-icons'/></a> */}
                     </div>
                </div>
               </div>
               <div className='col-md-4 mb-5'>
               <div className="card card-cascade wider">
               <div className="view view-cascade overlay">
               <img src={boxCar} alt="..." className="img-thumbnail center box-car-img"/>
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                        </a>
                     </div>
                    <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                      <h3 className="card-title text-white">MINI</h3>
                      <p class="blue-text pb-2 text-white">Seating 4+1</p>
                      <p className="card-text text-white">The perfect cab for a quick ride Indica, Etios Liva, Wagon R, Alto, Celerio, Indigo, Bolt </p>
                       <h3 className='text-white'>Rs.11/Km(Non-Ac)</h3>
                       <h3 className='text-white'>Rs.12/Km(Ac)</h3>
                     </div>
                </div>
               </div>
               <div className='col-md-4 mb-5'>
               <div className="card card-cascade wider">
               <div className="view view-cascade overlay">
               <img src={boxCar} alt="..." className="img-thumbnail center box-car-img"/>
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                        </a>
                     </div>
                    <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                      <h3 className="card-title text-white">MINI</h3>
                      <p class="blue-text pb-2 text-white">Seating 4+1</p>
                      <p className="card-text text-white">The perfect cab for a quick ride Indica, Etios Liva, Wagon R, Alto, Celerio, Indigo, Bolt </p>
                       <h3 className='text-white'>Rs.11/Km(Non-Ac)</h3>
                       <h3 className='text-white'>Rs.12/Km(Ac)</h3>
                     </div>
                </div>
               </div>
               <div className='col-md-4 mb-5'>
               <div className="card card-cascade wider">
               <div className="view view-cascade overlay">
               <img src={boxCar} alt="..." className="img-thumbnail center box-car-img"/>
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                        </a>
                     </div>
                    <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                      <h3 className="card-title text-white">MINI</h3>
                      <p class="blue-text pb-2 text-white">Seating 4+1</p>
                      <p className="card-text text-white">The perfect cab for a quick ride Indica, Etios Liva, Wagon R, Alto, Celerio, Indigo, Bolt </p>
                       <h3 className='text-white'>Rs.11/Km(Non-Ac)</h3>
                       <h3 className='text-white'>Rs.12/Km(Ac)</h3>
                     </div>
                </div>
               </div>
               <div className='col-md-4 mb-5'>
               <div className="card card-cascade wider">
               <div className="view view-cascade overlay">
               <img src={boxCar} alt="..." className="img-thumbnail center box-car-img"/>
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                        </a>
                     </div>
                    <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                      <h3 className="card-title text-white">MINI</h3>
                      <p class="blue-text pb-2 text-white">Seating 4+1</p>
                      <p className="card-text text-white">The perfect cab for a quick ride Indica, Etios Liva, Wagon R, Alto, Celerio, Indigo, Bolt </p>
                       <h3 className='text-white'>Rs.11/Km(Non-Ac)</h3>
                       <h3 className='text-white'>Rs.12/Km(Ac)</h3>
                     </div>
                </div>
               </div>
               <div className='col-md-4 mb-5 mb-5'>
               <div className="card card-cascade wider">
               <div className="view view-cascade overlay">
               <img src={boxCar} alt="..." className="img-thumbnail center box-car-img"/>
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                        </a>
                     </div>
                    <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                      <h3 className="card-title card-item text-white">MINI</h3>
                      <p class="blue-text card-item pb-2 text-white">Seating 4+1</p>
                      <p className="card-text card-item text-white">The perfect cab for a quick ride Indica, Etios Liva, Wagon R, Alto, Celerio, Indigo, Bolt </p>
                       <h3 className='text-white card-item'>Rs.11/Km(Non-Ac)</h3>
                       <h3 className='text-white card-item'>Rs.12/Km(Ac)</h3>
                     </div>
                </div>
               </div>
              </div>
            </div>
        </section>
        <section>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-6'>
                <h4 className='mt-5 drive-col'>FOR DRIVERS</h4>
                <span className='for-driv'>DO YOU WANT TO EARN WITH US?</span>
                <p>Are you an experienced driver willing to enrol with Maya Call Taxi? Come join us for these great benefits!</p>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-6 col-lg-6'>
                    <h5 className='px-corr'><FaCheck className='cheke-icon'/>Quick Payments</h5>
                    </div>
                    <div className='col-md-6 col-lg-6'>
                    <h5 className='px-corr'><FaCheck className='cheke-icon'/>Flexible Timings</h5>
                    </div>
                    <div className='col-md-6 col-lg-6'>
                    <h5 className='px-corr'><FaCheck className='cheke-icon'/>Low Commissions</h5>
                    </div>
                    <div className='col-md-6 col-lg-6'>
                    <h5 className='px-corr'><FaCheck className='cheke-icon'/>Friendly Management</h5>
                    </div>
                    <div className='col-md-6 col-lg-6'>
                    <h5 className='px-corr'><FaCheck className='cheke-icon'/>Stable Orders</h5>
                    </div>
                    <div className='col-md-6 col-lg-6'>
                    <h5 className='px-corr'><FaCheck className='cheke-icon'/>24/7 Support</h5>
                    </div>
                    <div className='col-6 mt-3 check-fare-btn'><button className="button-59" role="button">Join Us</button></div>
                  </div>
                </div>
              </div>
              <div className="bottom-space-medium-only col-md-6 col-lg-6 mt-5">
                        <div className="img-block shine-effect image-zoom">
                        <img src={car1} className="img-fluid for-drive-img" alt="..."/>
                 </div>
              </div>
            </div>
          </div>
        </section>
        <section className='serv-bg-col'>
        <div className='container-fluid padd-serv'>
        <div className='row'>
        <div className="col-lg-12 col-md-12 text-center">
                    <div className="col-wrap">
                      <div className="block-heading">
                        <h5 className="block-top-heading mt-3 hpy-tex">Happy Client's</h5>
                        <h2 className="block-main-heading font-test">Testimonial</h2>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <MDBContainer className="py-5">
      <MDBCarousel showControls dark>
       {/*  <MDBCarouselInner> */}
          <MDBCarouselItem className="active">
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Ram Kumar</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    They helped me when I was in urgent need and wanna tell u they provided me with a cab within 30 min in the 3 am night
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Madhu</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Best Cab service in vellore.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Sanjay</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    An excellent taxi service and comfortable travel. Was very helpful during my mrs Pregnancy period from my home to CMC. All the best for Maya taxi service and team
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Karthi</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Very gud service and quick response from staffs.superb.......keep it up.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Madhavan</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Comfortable and reliable taxi service in vellore
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Yuvaraj</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Available at any time wit nominal cost
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Selvam</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Best & Economical call taxi service in Vellore
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Akash</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    An excellent taxi service and comfortable travel. Was very helpful during my mrs Pregnancy period from my home to CMC. All the best for Maya taxi service and team
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Tamil Selvan</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
        {/* </MDBCarouselInner> */}
      </MDBCarousel>
    </MDBContainer>
        </section>
    </>
  )
}

export default Home;