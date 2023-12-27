import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Client.css";
import client1 from"../assets/client1.png"
import client2 from"../assets/client2.png"
import client3 from"../assets/client3.png"

export default function Client(){
    return(
        <div>
            <div className="container-fluid clientContainer ">
        <div className="d-flex w-100 align-items-center pl-40">
          <div className="title_container">Our&nbsp;clients</div>
          <div className="line_container">
            <div className="grey_line">    </div>
          </div>
        </div>
        <div className="d-flex row text-center align-items-center pt-5" >
          <div className="d-flex align-items-center justify-content-center greyBG col-md-4 col-sm-12 pt-3 pb-3" >
            <img className="client_image" src={client1}/>
          </div>
          <div className="d-flex align-items-center justify-content-center blueBG col-md-4 col-sm-12 pt-3 pb-3">
            <img className="client_image" src={client2}/>
          </div>
          <div className="d-flex align-items-center justify-content-center greyBG col-md-4 col-sm-12 pt-3 pb-3">
            <img className="client_image" src={client3}/>
          </div>
        </div>
      </div>
        </div>
    )
}