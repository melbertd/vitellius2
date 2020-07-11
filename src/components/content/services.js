
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Carousel from './carousel'

export default function Header() {

    var imgArr = ['images/svc1.png', 'images/svc2.png', 'images/svc3.png', 'images/svc4.png']

    return (
        <div className="container">
            <p className="">HOME - SERVICES</p>

            <div className="row">
                <div className="col-lg-12">
                    <p>
                        <span className="services-company">VITELLIUS LOGISTICS, INC. </span> 
                        is a service-oriented cargo handling company that provides clients comprehensive service solutions for brokerage, freight forwarding and logistics requirements in the Philippines and overseas. Our services offer a complete, one-stop solution to all customer needs with satisfaction guaranteed.   VITELLIUS LOGISTICS, INC. focuses on customer care thus it continuously seek to improve its processes and relationship with government entities, clients and service providers so that it is able to provide a service that is reliable, cost efficient and of high quality.
		            </p>
                </div>
            </div>

            <div className="row svc-offered">
                <div className="col-lg-12">
                    <h3>Services Offered</h3>
                </div>
                <div className="col-lg-6">
                    <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle"></i> Customs Brokerage</li>
                        <li><i className="fa fa-check-circle"></i> Trucking and Hauling</li>
                        <li><i className="fa fa-check-circle"></i> International Freight Forwarding</li>
                        <li><i className="fa fa-check-circle"></i> International and Domestic Door to Door Services</li>
                        <li><i className="fa fa-check-circle"></i> Non-Vessel Operational Common Carrier</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle"></i> Warehousing and Storage</li>
                        <li><i className="fa fa-check-circle"></i> Packing and Crafting</li>
                        <li><i className="fa fa-check-circle"></i> Project Cargo Handling</li>
                        <li><i className="fa fa-check-circle"></i> Tariff Consulations</li>
                    </ul>
                </div>
            </div>

            <div className="row d-none d-md-none d-lg-flex d-xl-flex">
                <div className="col-lg-3 md-6">
                    <img className="svc-img" src="images/svc1.png" alt="" />
                </div>
                <div className="col-lg-3 md-6">
                    <img className="svc-img" src="images/svc2.jpg" alt="" />
                </div>
                <div className="col-lg-3 md-6">
                    <img className="svc-img" src="images/svc3.jpg" alt="" />
                </div>
                <div className="col-lg-3 md-6">
                    <img className="svc-img" src="images/svc2.jpg" alt="" />
                </div>
            </div>

            <Carousel imgArr={imgArr} DivClass = {"d-none d-md-block d-lg-none"}/>

            <div className="row svc-keyResource">
                <div className="col-lg-12">
                    <h3>Key Resources and Equipments</h3>
                </div>
                <div className="col-lg-6">
                    <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle"></i> Customs Brokerage</li>
                        <li><i className="fa fa-check-circle"></i> Trucking and Hauling</li>
                        <li><i className="fa fa-check-circle"></i> International Freight Forwarding</li>
                        <li><i className="fa fa-check-circle"></i> International and Domestic Door to Door Services</li>
                        <li><i className="fa fa-check-circle"></i> Non-Vessel Operational Common Carrier</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul className="list-unstyled">
                        <li><i className="fa fa-check-circle"></i> Warehousing and Storage</li>
                        <li><i className="fa fa-check-circle"></i> Packing and Crafting</li>
                        <li><i className="fa fa-check-circle"></i> Project Cargo Handling</li>
                        <li><i className="fa fa-check-circle"></i> Tariff Consulations</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}