
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel'

import Img1 from '../../images/truck2.jpg';
import Img2 from '../../images/plane1.jpg';
import Img3 from '../../images/ship1.jpg';

export default function Header() {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            {/* Home */}
            <div className="container">
                <section id="services">
                    <h1 className="my-4">
                        <center>
                            <h1>Welcome to Vitellius</h1>
                            <br />
                            <h2 className="our-service">Our Service</h2>
                            <p className="our-service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.
                            </p>
                        </center>
                    </h1>


                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <center>
                                        <img src="../../images/icons/icon1.png" alt="" />
                                        <p className="service-title">CUSTOMS BROKERAGE</p>
                                    </center>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <center>
                                        <img src="../../images/icons/icon2.png" alt="" />
                                        <p className="service-title">INTERNATIONAL FREIGHT FORWARDING</p>
                                    </center>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <center>
                                        <img src="../../images/icons/icon3.png" alt="" />
                                        <p className="service-title">TRUCKING AND HAULING</p>
                                    </center>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-12 text-center">
                            <a id="demo01" className="services-showAll" href="services.html">Show All</a>
                        </div>
                    </div>

                </section>

                <section id="about">
                    <br />
                    <br />

                    <h2><strong>Who we are</strong></h2>
                    <div className="row">
                        <div className="col-lg-7 mb-4">
                            <h2><strong>34 years of experience in Logistics services</strong></h2>
                            <p>
                                VITELLIUS LOGISTICS, INC. was established in March 2003 as a firm servicing the customs brokerage requirements of clients.
                                It first held office in the Regina Building in Escolta, Manila. Since it was located in the heart of Manila, only a few minutes away from the Manila International
                                Container Port, Port of Manila, and the Ninoy Aquino International Airport it was easily accessible and highly convenient for the company to facilitate its operational
                                activities and requirements.
		                    </p>
                            <p>
                                Since its establishment in 2003, the company has been experiencing exponential growth. Such growth resulted to an increase in its manpower resources thus,
                                new divisions such as Brokerage, Sales, Human Resources, Trucking and Warehousing were created to ensure that the high quality of service being provided
                                is sufficiently monitored and maintained.
		                    </p>
                            <div className="row">
                                <div className="container">
                                    <a className="services-showAll" href="about.html">Read More</a>
                                    <a className="services-showAll" href="contact.html">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img className="img-fluid rounded" src="images/people.jpg" alt="" />
                        </div>
                    </div>
                </section>

                <br />
                <br />
            </div>
            {/* End Home */}

        </div>
    )
}