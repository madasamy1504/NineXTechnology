import React from "react";
import "./Contact.css";

export default function Contact(){
    return(
        <div className="container-fluid p-0">
             <div className="contactBgContainer">
                <div className="contactButtonContainer">
                    <button className="btn ContactBtn1"><i class="bi bi-link-45deg" ></i>Let’s Connect</button>
                </div>
                <div className="FormContainer">
                    <div className="FormBg">
                        <form method="post">
                            <div className="ContactText1">Send us a message</div>
                            <div className="ContactText2">Leave your information and a message for us and let’s do your next project!</div>
                            <div className="inputCont"><input type="text" className="nameInput" value='What’s your name?'/></div>
                            <div className="inputCont"> <input type="text" className="emailInput" value='What’s your email?'/></div>
                            <div className="inputCont"><input type="text" className="subjectInput" value='Subject'/></div>
                            <div className="inputCont"><input type="text" className="msgInput" value='Message'/></div>
                            <div className='ContactbtnConatainer'>
                            <a href='#'><button className='btn btn-primary Contactbtn' >Send&nbsp;&#8599;</button></a>

                            </div>
                        </form>
                    </div>
                    
                </div>
            
             <div className="copyrightContainer">© Copyright 2023 by <a href="https://9xtechnology.com/" target="_blank" style={{color:'#FFF'}}>9xtechnologies.com</a></div>
             </div>
        </div>
    )
}


