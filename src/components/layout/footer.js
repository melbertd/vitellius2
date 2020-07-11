
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Header() {

    return (
        <div>
            <footer className="py-5 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 ftr-section">
                            <center>
                                <img className="logo-ftr" src={"images/vli-ftr.png"} />
                            </center>
                        </div>
                        <div className="col-lg-3 ftr-section">
                            <p className="ftr-section-title">QUICK LINKS</p>
                            <ul className="list-unstyled">
                                <li><a href="index.html">HOME</a></li>
                                <li><a href="services.html">SERVICES</a></li>
                                <li><a href="about.html">ABOUT</a></li>
                                <li><a href="contact.html">QOUTE REQUEST</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 ftr-section">
                            <p className="ftr-section-title">CONTACT US</p>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-map-marker"></i> BLK 2 Lot 9 Fifth St. Centro De Buenviaje, Sto. Nino, Marikina City</li>
                                <li><i className="fa fa-envelope"></i> Vli@vitellius-logisticsinc.com</li>
                                <li><i className="fa fa-phone"></i> 0917-5931179 / 505-5865(632)</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 ftr-section">
                            <p className="ftr-section-title">CONNECT WITH US</p>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-facebook"></i> fb.me/vitellius-logisticsinc</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}


