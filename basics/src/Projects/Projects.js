import React from "react";
import "./Project.css";
import project1 from"../assets/project1.png";
import project2 from"../assets/project2.png";
import project3 from"../assets/project3.png";
import project4 from"../assets/project4.png";

export default function Project(){
    return(
        <div className="container-fluid p-0" >
            <div className="ProjectContainer">
                <div className="ProjectTitle">EXPLORE OUR PROJECTS</div>
                <div className="row projectRow">
                    <div className="col-12 col-md-6 mp-0 plr-35">
                        <div>
                            <img src={project1} className="projectImg"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mp-0 plr-35">
                        <div>
                            <img src={project2} className="projectImg"/>
                        </div>
                    </div>
                </div>
                <div className="row projectRow">
                    <div className="col-12 col-md-6 mp-0 plr-35">
                        <div>
                            <img src={project3} className="projectImg"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mp-0 plr-35">
                        <div>
                            <img src={project4} className="projectImg"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}