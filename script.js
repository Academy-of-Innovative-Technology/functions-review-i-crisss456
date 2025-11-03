// ===== FUNCTIONS WITH NO PARAMETERS ===== //
function sayhello() {
    let output1 = document.querySelector("#output1") 
    output1.innerHTML = "Hello roger! welcome to JavaScript functions!"
}

function showDate() {
    let output1 = document.querySelector("#output1") 
    output1.innerHTML = "Hello roger! Today's Date is 10/29/25"
}

function getMotivation() {
    let output1 = document.querySelector("#output1") 
    output1.innerHTML = "Hello roger! MOTIVATION"
}

function showRep() {
    let output1 = document.querySelector("#output1") 
    output1.innerHTML = "Hello roger! Show Rep"
}



// ===== FUNCTIONS WITH PARAMETERS ===== //
function twelve(){
    let output2 = document.querySelector("#output2") 
    output2.innerHTML = "The sum of 5 and 7 is 12"
}
function alex() {
    let output2 = document.querySelector("#output2") 
    output2.innerHTML = "Hello, Alex! 👋 Welcome to the world of JavaScript."
}
function area() {
    let output2 = document.querySelector("#output2") 
    output2.innerHTML = "The area of a 10x6 rectangle is 60 square units."
}
function Color() {
    let output2 = document.querySelector("#output2") 
    output2.innerHTML = "Your favorite color is blue! 🎨"
}
function  Convert() {
    let output2 = document.querySelector("#output2") 
    output2.innerHTML = "25°C equals 77.0°F"
}







// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //
document.querySelector(".sayhellobtn").addEventListener("click", function(){
    sayhello();
});

document.querySelector(".showDatebtn").addEventListener("click", function(){
    showDate();
});

document.querySelector(".getMotivationbtn").addEventListener("click", function(){
    getMotivation();
});

document.querySelector(".showRepbtn").addEventListener("click", function(){
    showRep();
});

/////////////////////////////////////////////////////////////////////////////////////
document.querySelector(".twelvebtn").addEventListener("click", function(){
    twelve();
});

document.querySelector(".alexbtn").addEventListener("click", function(){
    alex();
});

document.querySelector(".areabtn").addEventListener("click", function(){
    area();
});

document.querySelector(".Colorbtn").addEventListener("click", function(){
    Color();
});

document.querySelector(".Convertbtn").addEventListener("click", function(){
    Convert();
});
