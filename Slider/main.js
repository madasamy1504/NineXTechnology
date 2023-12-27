//==== Global variable declartion === //
let card = document.querySelectorAll(".card"),
arrowLeftimg = document.getElementById("arrowLeftimg"),
arrowRightimg = document.getElementById("arrowRightimg");
//==== Global variable declartion === //

//Inintial stage
var activeFinder = null;


// Arrow activator
function arrowActivator(){
    
    card.forEach((item,index)=>{
        if(item.classList.contains("active")){
            activeFinder = index;
        }
    })

    if(activeFinder == 0){
        arrowLeftimg.classList.add("disabler");
        arrowRightimg.classList.remove("disabler");
        console.log(activeFinder);
    }else if(activeFinder == 2){
        arrowRightimg.classList.add("disabler");
        arrowLeftimg.classList.remove("disabler");
        console.log(activeFinder);

    }else{
        arrowLeftimg.classList.remove("disabler");
        arrowRightimg.classList.remove("disabler");

    }
}


//Card click handeler
card.forEach((item)=>{
    item.addEventListener("click",()=>{
        card.forEach((subitems,index)=>{
            let temp = subitems.classList.contains("active");
            if(temp){
            card[index].classList.remove("active");
            }
        });
       item.classList.add("active");
       arrowActivator();


    });

})

// ======Left Arrow click ==== //
arrowLeftimg.addEventListener("click",()=>{
    console.log(activeFinder);
    for(let i=0; i<card.length; i++){
        let temp = card[i].classList.contains("active");
        if(temp == true){
            activeFinder = i;
            break;
        }
    }
    console.log(activeFinder);

    if(activeFinder <= 0 && activeFinder != null){
        // alert("Alreday Wheel-1 highlighted please Cilck the right side arrow to navigate Wheel-2");
    }else if(activeFinder >= 0 && activeFinder != null){
        card[activeFinder].classList.remove("active");
        card[activeFinder-1].classList.add("active");
    }
    
    else if(activeFinder == null){
        card[2].classList.add("active");
    }
    
    arrowActivator();
});
// ======Left Arrow click ==== //



// ======Right Arrow click ==== //
arrowRightimg.addEventListener("click",()=>{
    console.log(activeFinder);
    for(let i=0; i<card.length; i++){
        let temp = card[i].classList.contains("active");
        if(temp == true){
            activeFinder = i;
            break;
        }
    }
    if(activeFinder == 2){
        // alert("Alreday Wheel-3 highlighted please Cilck the left side arrow to navigate Wheel-2");
    }else if(activeFinder < 2 && activeFinder != null){
        card[activeFinder].classList.remove("active");
        card[activeFinder + 1].classList.add("active");
    }
    else if(activeFinder == null){
        card[0].classList.add("active");

    }
    arrowActivator();
});
// ======Right Arrow click ==== //