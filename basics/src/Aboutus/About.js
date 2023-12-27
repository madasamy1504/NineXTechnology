import React from "react";
import Rightimg from"../assets/rightimg.png"
import "./About.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function About(){
    return(
<div className="container-fluid p-0">
        <div className=" BgContainter">
            <div className="row  width100">
              
               <div className="col-md-7 col-sm-12 container1 ">
                    <div className="txt1">ABOUT US</div>
                    <div className="txt2">We Execute Our Ideas From The Start To Finish</div>
                    <div className="txt3">9X Technology is a leading-edge tech firm dedicated to innovation and transformative solutions. We specialize in custom software development, harnessing the power of artificial intelligence, machine learning, and cutting-edge technologies to create unparalleled digital experiences. Our team of experts excels in mobile and web development, crafting intuitive applications and responsive platforms that meet the diverse needs of modern businesses.</div>

                    <div className='AboutbtnConatainer'>
                    <a href='#'><button className='btn  aboutbtn' >Learn More&nbsp;&#8599;</button></a>
                    </div>

                </div>

                <div className="col-md-5 col-sm-12 ">
                    <img src={Rightimg} className="Rightimg mw-100"/>
                </div>

               

                

                


              
            </div>
          
        </div>
    </div>
    )
}

export default About;