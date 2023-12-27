import React from "react";
import "./Careers.css";
import CeoImg from"../assets/CEO.png";

export default function Careers(){
    return(
        <div className="container-fluid p-0 ">
            <div className="CareerContainer">
                <div className="InsideContainer">
                    <div className="row CareerrowContainer">
                    <div className="col-12 col-md-8 mp-0">
                        <div className="CareerText1">
                        At 9X Technology, we are passionate about innovation and committed to transforming the way businesses operate in the digital age. Our journey is characterized by a relentless pursuit of excellence, a dedication to ethical practices, and a customer-centric approach. we are also at the forefront of  IOT development, connecting devices for smarter, more efficient operations. Our commitment doesn't stop at development; we offer ongoing tech support and maintenance to ensure the seamless functionality of the solutions we provide. Our aim is to empower businesses through digital transformation, offering adaptive solutions that keep our clients ahead of the curve in this ever-evolving tech landscape.
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mp-0 mt-auto">
                        <div>
                            <div><img className="ceoImg" src={CeoImg}/></div>
                            <div className="ceoName">Yatin Kukreja</div>
                            <div className="ceoPosition">CEO, 9X Technology LLC</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}