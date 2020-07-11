
import React from "react";

import Carousel from 'react-bootstrap/Carousel'

export default function _Carousel({ imgArr, DivClass = "" }) {

    console.log(imgArr);


    const renderImages = () => {
        return imgArr.map(function (img) {
            return (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                </Carousel.Item>
            )
        })
    }


    return (
        <div className={DivClass}>
            <Carousel>
                {renderImages()}
            </Carousel>
        </div>
    )
}