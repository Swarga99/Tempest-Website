let text = "Hello... this small corner of the internet was made just for you.";

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,60);

}

}

typeWriter();

function nextPage(){

document.querySelector(".container").style.display="none";

document.getElementById("secondPage").classList.remove("hidden");

}

function showFinal(){

document.getElementById("secondPage").style.display="none";

document.getElementById("finalPage").classList.remove("hidden");

}