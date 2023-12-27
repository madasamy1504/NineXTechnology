import React from "react";
import "./Ourvision.css";
export default function Ourvision(){
    return(
        <div className="container-fluid p-0">
            <div className="visionContainer">
                <div className="row rowContainer">

                    <div className="col-12 col-md-6 mp-0">
                        <div className="visionCard1Border mvisionCard1Border">
                            <div className="visionCard1Background">
                            <div className="visionTitle">MISSION</div>
                            <div className="visionText">"9x Technology's mission is to deliver innovative, customized tech solutions that transform businesses and enhance lives worldwide."</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mp-0">
                    <div className="visionCard1Border">
                            <div className="visionCard1Background">
                            <div className="visionTitle">VISION</div>
                            <div className="visionText">"9x Technology aims to revolutionize industries through cutting-edge innovations, empowering a globally connected future."</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}