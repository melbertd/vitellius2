
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Carousel from './carousel';

export default function About() {

    var imgArr = ['images/svc1-1.png', 'images/svc2-2.png', 'images/svc3-3.png', 'images/svc4-4.png']

    return (
        <div className="container">
            <p className="">HOME - ABOUT US</p>


            <div className="row aboutUS">
                <div className="col-lg-12">
                    <h3>Company Profile</h3>
                </div>
                <div className="col-lg-12">
                    <p>
                        <span className="services-company">VITELLIUS LOGISTICS, INC. </span>
                            was established in March 2003 as a firm servicing the customs brokerage requirements of clients.
                            It first held office in the Regina Building in Escolta, Manila. Since it was located in the heart of Manila,
                            only a few minutes away from the Manila International Container Port, Port of Manila, and the Ninoy Aquino International Airport
                            it was easily accessible and highly convenient for the company to facilitate its operational activities and requirements.
                    </p>

                    <p>
                        Since its establishment in 2003, the company has been experiencing exponential growth. Such growth resulted to an increase in its manpower resources thus,
                        new divisions such as Brokerage, Sales, Human Resources, Trucking and Warehousing were created to ensure that the high quality of service being provided is
                        sufficiently monitored and maintained. In 2005 it became inevitable that the company moved to a bigger place to enable it to operate efficiently and fulfill
                        the company’s service commitment to its customers. For its ability to provide fast, cost efficient and reliable service solutions to the complex and high
                        demands of its customers that the reputation of the company has been built on.
                    </p>

                    <p>
                        In July of 2005, VITELLIUS LOGISTICS, INC.  strategically moved office to Parañaque City to increasing trade requirements such as cargo warehousing and space
                        for its pool of rolling and moving equipments. The move was in-line with the company’s vision of a full-service cargo handling company that aims to partner
                        with its client in producing the highest level of performance and products that meets the ever changing and highly demanding requirements of the global
                        business community. The warehouse is fully operational and equipped with material and moving resources, and is well secured and has safety hazard protection.
                    </p>

                    <p>
                        VITELLIUS LOGISTICS, INC. is managed by the General Manager who has a vast 30-year forwarding and customs brokerage experience.
                        It also has in its pool, a group of highly skilled Managers who lead a group of well trained staff in providing a highly efficient and reliable service.
                        All personnel are continuously trained to ensure that our commitment to provide service and product consistency exceeds customer expectation.
                    </p>

                    <p>
                        Today, VITELLIUS LOGISTICS, INC. is committed to maintain fast, reliable and cost-efficient service, which is our competitive edge.
                        Through its partners, the company is in a great position to carry out its service commitments to all clients in the Philippines, and the global community.
                    </p>

                </div>
            </div>

            <br />

            <div className="row d-none d-md-none d-lg-flex d-xl-flex">
                <div className="col-lg-3 md-6">
                    <img className="svc-img" src="images/svc1-1.png" alt="" />
                </div>
                <div className="col-lg-3 md-6">
                    <img className="svc-img" src="images/svc2-2.png" alt="" />
                </div>
                <div className="col-lg-3 md-6">
                    <img className="svc-img" src="images/svc3-3.png" alt="" />
                </div>
                <div className="col-lg-3 md-6">
                    <img className="svc-img" src="images/svc4-4.png" alt="" />
                </div>
            </div>


            <Carousel imgArr={imgArr} DivClass = {"d-none d-md-block d-lg-none"}/>


            <br />

            <div className="row abt-accreditations">
                <div className="col-lg-12">
                    <h3>ACCREDITATIONS AND LICENSES</h3>
                </div>

                <div className="col-lg-12">
                    <br />
                    <h6><i className="fa fa-check-circle"></i> PHILIPPINE SHIPPER’S BUREAU (PSB) ACCREDITATIONS</h6>
                    <ul>
                        <li>INTERNATIONAL FREIGHT FORWARDER</li>
                        <li>NON-VESSEL OPERATING COMMOM CARRIER</li>
                        <li>CARGO CONSOLIDATOR</li>
                        <li>BREAKBULK AGENT</li>
                    </ul>
                    <h6><i className="fa fa-check-circle"></i> CUSTOMS BROKERAGE / TRUCKING LICENSES</h6>
                    <ul>
                        <li>NINOY AQUINO INTERANTIONAL AIRPORT</li>
                        <li>MANILA INTERNATIONAL CONTAINER PORT</li>
                        <li>PORT OF MANILA</li>
                    </ul>
                    <h6><i className="fa fa-check-circle"></i> ALLIANCE OF CONCERNED TRUCK OWNERS & ORGANIZATION</h6>
                </div>
            </div>

        </div>
    )
}