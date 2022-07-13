const sec8_s1 = document.querySelector("#sec8-s1 img");
const sec8_s2 = document.querySelector("#sec8-s2 img");
const sec8_s3 = document.querySelector("#sec8-s3 img");
const sec8_s4 = document.querySelector("#sec8-s4 img");
const sec8_divider_inner = document.querySelector(".sec8-divider-inner");

function hoverChange(name, bgColor){
    if(name === "s1"){
         sec8_s1.style.backgroundColor= bgColor || '';
 
         if(bgColor){
             // setTimeout(function(){
             //     sec8_s1.setAttribute("src","./images/Clients happy hover.svg");
             // },200);
             sec8_s1.setAttribute("src","./images/Projects completed. (1).svg");
 
             sec8_divider_inner.style.animation = 'sec8_Divider_25_forward 0.3s linear forwards';
         }else{
             sec8_s1.setAttribute("src","./images/Projects completed.svg");
             // sec8_divider_inner.style.animation = 'sec8_Divider_25_backward 0.3s linear';
             sec8_divider_inner.style.animation = '';
         }
    }
    else if(name === "s2"){
         sec8_s1.style.backgroundColor= bgColor || '';
         sec8_s2.style.backgroundColor= bgColor || '';
 
         if(bgColor){
             setTimeout(function(){},950);
             sec8_s1.setAttribute("src","./images/Projects completed. (1).svg");
             sec8_s2.setAttribute("src","./images/Clients happy. (1).svg");
             sec8_divider_inner.style.animation = 'sec8_Divider_50_forward 0.3s linear forwards';
         }
         else{
             sec8_s1.setAttribute("src","./images/Projects completed.svg");
             sec8_s2.setAttribute("src","./images/Clients happy.svg");
             sec8_divider_inner.style.animation = '';
         }
 
    }
    else if(name === "s3"){
         sec8_s1.style.backgroundColor= bgColor || '';
         sec8_s2.style.backgroundColor= bgColor || '';
         sec8_s3.style.backgroundColor= bgColor || '';
 
         if(bgColor){
             setTimeout(function(){},950);
             sec8_s1.setAttribute("src","./images/Projects completed. (1).svg");
             sec8_s2.setAttribute("src","./images/Clients happy. (1).svg");
             sec8_s3.setAttribute("src","./images/Services available (1).svg");
             sec8_divider_inner.style.animation = 'sec8_Divider_80_forward 0.3s linear forwards';
         }
         else{
             sec8_s1.setAttribute("src","./images/Projects completed.svg");
             sec8_s2.setAttribute("src","./images/Clients happy.svg");
             sec8_s3.setAttribute("src","./images/Services available.svg");
             sec8_divider_inner.style.animation = '';
         }
 
    }
    else{
         sec8_s1.style.backgroundColor= bgColor || '';
         sec8_s2.style.backgroundColor= bgColor || '';
         sec8_s3.style.backgroundColor= bgColor || '';
         sec8_s4.style.backgroundColor= bgColor || '';
 
         if(bgColor){
             setTimeout(function(){},950);
             sec8_s1.setAttribute("src","./images/Projects completed. (1).svg");
             sec8_s2.setAttribute("src","./images/Clients happy. (1).svg");
             sec8_s3.setAttribute("src","./images/Services available (1).svg");
             sec8_s4.setAttribute("src","./images/Amazing result. (1).svg");
             sec8_divider_inner.style.animation = 'sec8_Divider_100_forward 0.3s linear forwards';
         }
         else{
             sec8_s1.setAttribute("src","./images/Projects completed.svg");
             sec8_s2.setAttribute("src","./images/Clients happy.svg");
             sec8_s3.setAttribute("src","./images/Services available.svg");
             sec8_s4.setAttribute("src","./images/Amazing result.svg");
             sec8_divider_inner.style.animation = '';
         }
    }
    
     // sec8_divider_inner.style.width = width || '';
     sec8_divider_inner.style.backgroundColor = bgColor || '';
     // sec8_divider_inner.style.transition = width ? "width 2s" : "";
 }
 
 sec8_s1.addEventListener("mouseenter", function(){
     hoverChange("s1","#407bff");
 })
 
 sec8_s1.addEventListener("mouseout", function(){
     hoverChange("s1");
 })
 
 sec8_s2.addEventListener("mouseenter", function(){
     hoverChange("s2","#407bff");
 })
 
 sec8_s2.addEventListener("mouseout", function(){
     hoverChange("s2");
 })
 
 sec8_s3.addEventListener("mouseenter", function(){
     hoverChange("s3","#407bff");
 })
 
 sec8_s3.addEventListener("mouseout", function(){
     hoverChange("s3");
 })
 
 sec8_s4.addEventListener("mouseenter", function(){
     hoverChange("s4","#407bff");
 })
 
 sec8_s4.addEventListener("mouseout", function(){
     hoverChange("s4");
 })
 






// function hoverChange(name, bgColor, width){
//    if(name === "s1"){
//         sec8_s1.style.backgroundColor = bgColor || '';
//    }else if(name === "s2"){
//         sec8_s1.style.backgroundColor = bgColor || '';
//         sec8_s2.style.backgroundColor = bgColor || '';
//    }else if(name === "s3"){
//         sec8_s1.style.backgroundColor = bgColor || '';
//         sec8_s2.style.backgroundColor = bgColor || '';
//         sec8_s3.style.backgroundColor = bgColor || '';
//    }else{
//         sec8_s1.style.backgroundColor = bgColor || '';
//         sec8_s2.style.backgroundColor = bgColor || '';
//         sec8_s3.style.backgroundColor = bgColor || '';
//         sec8_s4.style.backgroundColor = bgColor || '';
//    }
   
//     sec8_divider_inner.style.width = width || '';
//     sec8_divider_inner.style.backgroundColor = bgColor || '';
// }

// sec8_s1.addEventListener("mouseenter", function(){
//     hoverChange("s1","#4D77FF", '20%');
// });

// sec8_s1.addEventListener("mouseout", function(){
//     hoverChange("s1");
// });

// sec8_s2.addEventListener("mouseenter", function(){
//     hoverChange("s2","#4D77FF", '50%');
// });

// sec8_s2.addEventListener("mouseout", function(){
//     hoverChange("s2");
// });

// sec8_s3.addEventListener("mouseenter", function(){
//     hoverChange("s3","#4D77FF", '80%');
// });

// sec8_s3.addEventListener("mouseout", function(){
//     hoverChange("s3");
// });

// sec8_s4.addEventListener("mouseenter", function(){
//     hoverChange("s4","#4D77FF", '100%');
// });

// sec8_s4.addEventListener("mouseout", function(){
//     hoverChange("s4");
// });


// const headerBar = document.querySelector(".bar");
// const headerX = document.querySelector(".times");
// const navContainer = document.querySelector(".nav-container");

// headerBar.addEventListener("click", () => {
//     navContainer.style.display = "flex";
//     headerBar.style.display = "none";
//     headerX.style.display = "block";
// });

// headerX.addEventListener("click", () => {
//     navContainer.style.display = "none";
//     headerX.style.display = "none";
//     headerBar.style.display = "block";
// });











// const headerBar = document.querySelector(".bar");
// const headerX = document.querySelector(".times");
// const navContainer = document.querySelector(".sec-nav-contents");

// headerBar.addEventListener("click", () => {
//     navContainer.style.display = "flex";
//     headerBar.style.display = "none";
//     headerX.style.display = "block";
// });

// headerX.addEventListener("click", () => {
//     navContainer.style.display = "none";
//     headerX.style.display = "none";
//     headerBar.style.display = "block";
// });

