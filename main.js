let container = document.getElementById("container");
let shadow = document.getElementById("shadow");
let logo = document.getElementById("logo");
let nav = document.getElementById("nav");
let modal = document.getElementById("modal");
let box = document.getElementsByClassName("box");
let card = document.getElementsByClassName("card");
let btnback= document.getElementById("back-btn");
let btnNext= document.getElementById("next-btn");
let btnNext2 = document.getElementById("next2-btn");
let btnNext3 = document.getElementById("next3-btn");
let btnBook = document.getElementById("book-btn");

container.addEventListener("scroll",function(){
    var value = container.scrollTop;
    
    if(value >= 700) {
        shadow.style.background="linear-gradient(180deg, rgba(0,0,0,1) 33%, rgba(0,0,0,0) 33%)";
        logo.style.top="5px";
        logo.style.left="50px";
        nav.style.top="49px";
        nav.style.right="10px";
        nav.style.transform="translate(0,0)";
        logo.style.display="block";
    }
    else{
        shadow.style.background="linear-gradient(180deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,0) 100%)";
        logo.style.top="81px";
        logo.style.left="140px";
        nav.style.top="80px";
        nav.style.right="50%";
        logo.style.display="none";
        nav.style.transform="translate(50%,0)";
    }
})

function funtClose(){
    modal.style.display="none";
}
function funtOpen(){
    modal.style.display="block";
}
function funtNext(){
    btnback.style.display="block";
    box[0].style.display="none";
    box[1].style.display="flex";
    btnNext.style.display="none";
    btnNext2.style.display="block";
}
function funtBack(){
    // if(box[1].style.display="flex"){
    //     btnback.style.display="none";
    //     box[1].style.display="none";
    //     box[0].style.display="flex";
    //     btnNext.style.display="block";
    //     btnNext2.style.display="none";         
    // }else
    // if(box[2].style.display="flex"){
    //     box[2].style.display="none";
    //     box[1].style.display="flex";               
    // }
    btnback.style.display="none";
    box[0].style.display="flex";
    box[1].style.display="none";
    btnNext.style.display="block";
    btnNext2.style.display="none";
    if(box[2].style.display="flex") 
    box[2].style.display="none";

}
function funtNext2(){
    box[1].style.display="none";
    box[2].style.display="flex";
    btnNext3.style.display="block";
    btnNext2.style.display="none";
}
function funtNext3(){
    box[2].style.display="none";
    box[3].style.display="flex";
    btnNext3.style.display="none";
    btnBook.style.display="block";
}
function funtBook(){
    box[4].style.display="flex";
    setTimeout(function(){ box[4].style.display="none"; }, 3000);
}
function funtSelect(card2){
    if(card2.style.border="none")
        card2.style.border="4px solid greenyellow";
        else card2.style.border="none";
   
}
// function funtUnselect(card2){
//     if(card2.style.border="1px solid greenyellow")
//     card2.style.border="none";
// }



// function myFunction() {
//   if (container.scrollTop > 1000 || container.documentElement.scrollTop > 1000) {
//     shadow.style.background="black";
//             shadow.style.height="140px";
//             logo.style.top="10px";
//             nav.style.top="49px";  } 
//     else {
//     shadow.style.background="linear-gradient(180deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,0) 100%)";
//     shadow.style.height="30vh";
//     logo.style.top="81px";
//     nav.style.top="120px";
//     }
// }
// container.onscroll = function() {myFunction()};
