import React, { useRef, useState } from "react";
import "./Service2.css";
import { CardData } from "./Data/Details";

const ITEM_WIDTH = 200;

function Service2() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount) => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + scrollAmount;

    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);

    // Access the container element and set its scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;
  };

let a = document.querySelectorAll('card');
console.log(a);


  
    return (
      <div className="container-fluid p-0 Service2Bg">
        <div
          ref={containerRef}
          style={{
            width: "100%",
            overflowX: "scroll",
            scrollBehavior: "smooth",
          }}

          className="Service2Container"
        >
          <div className="content-box">
            {CardData.map((item,index) => (
              <div className="card"  >
               <div className="Cardtitle">{item.title}</div>

              </div>
            ))}
          </div>
        </div>
  
        <div className="action-btns1">
          <button onClick={() => handleScroll(-200)} style={{color:'#FFF'}}>&#8592;</button>
          <button onClick={() => handleScroll(200)} style={{color:'#FFF'}}>&#8594;</button>
        </div>
      </div>
    );
  }
  
  export default Service2;