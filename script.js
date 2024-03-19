let heroSection = document.querySelectorAll(".size");
let navigation2 = document.querySelectorAll(".nav2");
let Rightbtn = document.getElementById("righticon1");
let leftbtn = document.getElementById("lefticon2");
// console.log(leftbtn);


// console.log(btn);
let CardSection = document.querySelector("#cards-section");
// let box = document.querySelector(".box")
// let cardSectionWidth = CardSection.offsetWidth; //access an  width of cardSection using offsetwidth
// console.log(cardSectionWidth);
// let boxStyle = window.getComputedStyle(box);  //access the box styling as an object using getcomputedStyle property
// let boxMargin = boxStyle.margin;  // access margin property from the box style style object;
// let boxMarginNumber = Number(boxMargin.match(/\d+/g)[0]); //extract the number value from the boxMargin using regular Expression.

let count = 0;
function startMovingSlide(){
  movingSlides(count + 1)
}
function movingSlides(slideNumber){
  let movement = -100;
  heroSection[slideNumber].style.transform =`translateX(${movement}%)`;
  heroSection[slideNumber].style.transition ="transform  3s ease-in";
  count = slideNumber
}

let intervalID = setInterval(startMovingSlide,10000,count);
 clearInterval(intervalID);

  // featured car section

 for(let i=0; i<navigation2.length; i++){
   navigation2[i].addEventListener(("click"),()=>{
     if(i == 0 && i < 1 && i < 2){
       navigation2[0].classList.add("color-change")
       navigation2[1].classList.remove("color-change")
       navigation2[2].classList.remove("color-change")
     }
     else if(i != 0 && i == 1 && i < 2){
       navigation2[1].classList.add("color-change")
       navigation2[0].classList.remove("color-change")
       navigation2[2].classList.remove("color-change")
     }
     else if(i != 0 && i != 1 && i ==2){
       navigation2[0].classList.remove("color-change")
       navigation2[1].classList.remove("color-change")
       navigation2[2].classList.add("color-change")
     }
   })
  }
     
 
//  code for card crousel;

let offset = 0;
let Movement

// rightbtn function
function MovingSlide(slideValue){
  
    let SlideMovement = -200
    Movement = slideValue * SlideMovement
    CardSection.style.transform =`translateX(${Movement}px)`;
    CardSection.style.transition = "transform  0.5s ease-in"
    // console.log(Movement);
    if(offset <= 5){
      offset = slideValue;
    }
   


    if(Movement > -1000 || Movement == 0){
      // Rightbtn.style.visibility ="none";
      leftbtn.style.visibility ="hidden";
    }
    else if(Movement == -1000 || Movement < -1000){
      Rightbtn.style.visibility = "hidden";
      leftbtn.style.visibility = "visible";
    }
      console.log(offset);
     
  }
   
  // console.log("offset value =" ,offset);
     
function StartMovingFunction(){
  if(offset < 5){
    MovingSlide(offset + 1);
  }
}

   

Rightbtn.addEventListener("click",()=>{
  StartMovingFunction()
})
 
  // leftbtn function
  let leftMeasurement = -1000;
function leftMovement(leftMeasurement){
  //  Movement = leftMeasurement + 200;
   CardSection.style.transform =`translateX(${leftMeasurement}px)`;
   CardSection.style.transition = "transform  0.5s ease-in"
   
  } 
  


leftbtn.addEventListener("click",()=>{
  let value = 200;
  if(leftMeasurement != 0){
  leftMeasurement+=value;
  leftMovement(leftMeasurement)
  // console.log(leftMeasurement);
 }
 else if(leftMeasurement == 0){
  Rightbtn.style.visibility = "visible";
 }
  
   
});

  
  
    
    








  
















 
 

  




 







    

  
  




  





  

 

